-- ============================================================
--  EF Rutinas — Esquema de base de datos (PostgreSQL)
--  Cubre: login · ejercicios · rutinas oficiales · rutinas
--         personalizadas por usuario · favoritos
--
--  Ejecutar en: PostgreSQL 13+  (o el editor SQL de Supabase)
--  Orden: los tipos y tablas se crean de arriba hacia abajo.
-- ============================================================

-- gen_random_uuid() para generar IDs únicos automáticamente.
-- (En PostgreSQL 13+ ya viene incluido; esta línea no estorba.)
create extension if not exists pgcrypto;


-- ============================================================
--  1. TIPOS (valores cerrados, para no equivocarse escribiendo)
-- ============================================================

create type intensidad   as enum ('suave', 'media', 'alta');
create type material_tipo as enum ('ninguno', 'basico', 'completo');
create type rol_usuario   as enum ('profesor', 'admin');


-- ============================================================
--  2. USUARIOS  (el login)
--     Recomendación: solo profesores/docentes, nunca estudiantes
--     menores, para no manejar datos personales de niños.
-- ============================================================

create table usuarios (
    id             uuid          primary key default gen_random_uuid(),
    email          text          not null unique,
    password_hash  text          not null,          -- ¡NUNCA la contraseña en texto plano!
    nombre         text          not null,
    rol            rol_usuario   not null default 'profesor',
    creado_en      timestamptz   not null default now()
);


-- ============================================================
--  3. EJERCICIOS  (el catálogo de movimientos)
--     Cada ejercicio existe una sola vez y se reutiliza en
--     muchas rutinas.
-- ============================================================

create table ejercicios (
    id                 uuid        primary key default gen_random_uuid(),
    nombre             text        not null,
    descripcion        text,                              -- cómo se hace (opcional)
    grupo_muscular     text,                              -- 'piernas', 'core', 'cardio'...
    requiere_material  boolean     not null default false,
    media_url          text,                              -- gif/imagen del ejercicio (opcional)
    creado_en          timestamptz not null default now()
);


-- ============================================================
--  4. RUTINAS  (oficiales Y personalizadas, en la misma tabla)
--
--     owner_id = NULL   -> rutina OFICIAL (la ven todos)
--     owner_id = <uuid> -> rutina PERSONALIZADA de ese usuario
--
--     Un solo campo distingue las dos: simple y flexible.
-- ============================================================

create table rutinas (
    id             uuid          primary key default gen_random_uuid(),
    nombre         text          not null,
    descripcion    text,
    duracion_min   smallint      not null check (duracion_min > 0 and duracion_min <= 60),
    intensidad     intensidad    not null default 'media',
    material       material_tipo not null default 'ninguno',
    owner_id       uuid          references usuarios(id) on delete cascade,
    creado_en      timestamptz   not null default now(),
    actualizado_en timestamptz   not null default now()
);

-- Índice para buscar rápido "las rutinas de este usuario".
create index idx_rutinas_owner on rutinas(owner_id);


-- ============================================================
--  5. RUTINA_EJERCICIOS  (EL CORAZÓN DE LA APP)
--
--     Conecta rutinas <-> ejercicios y guarda los parámetros
--     de cada ejercicio DENTRO de esa rutina. De aquí come
--     tu cronómetro: recorre por 'posicion' y usa series /
--     trabajo_seg / descanso_seg para contar.
--
--     Un mismo ejercicio (ej. "Sentadillas") puede aparecer en
--     muchas rutinas con distintos segundos y series.
-- ============================================================

create table rutina_ejercicios (
    id             uuid      primary key default gen_random_uuid(),
    rutina_id      uuid      not null references rutinas(id)   on delete cascade,
    ejercicio_id   uuid      not null references ejercicios(id) on delete restrict,
    posicion       smallint  not null,                                 -- orden: 1, 2, 3...
    series         smallint  not null default 1 check (series > 0),
    trabajo_seg    smallint  check (trabajo_seg > 0),                  -- ejercicios por TIEMPO
    reps           smallint  check (reps > 0),                         -- o por REPETICIONES
    descanso_seg   smallint  not null default 0 check (descanso_seg >= 0),

    -- Dentro de una rutina, cada posición es única (no hay dos "paso 2").
    unique (rutina_id, posicion),

    -- Debe tener tiempo O repeticiones (al menos uno).
    check (trabajo_seg is not null or reps is not null)
);

create index idx_rutina_ejercicios_rutina on rutina_ejercicios(rutina_id);


-- ============================================================
--  6. FAVORITOS  (un usuario guarda una rutina para tenerla a mano)
-- ============================================================

create table favoritos (
    usuario_id  uuid        not null references usuarios(id) on delete cascade,
    rutina_id   uuid        not null references rutinas(id)  on delete cascade,
    creado_en   timestamptz not null default now(),
    primary key (usuario_id, rutina_id)     -- no se puede guardar dos veces la misma
);


-- ============================================================
--  7. (Opcional) Mantener 'actualizado_en' al día automáticamente
-- ============================================================

create or replace function tocar_actualizado_en()
returns trigger as $$
begin
    new.actualizado_en = now();
    return new;
end;
$$ language plpgsql;

create trigger trg_rutinas_actualizado
    before update on rutinas
    for each row execute function tocar_actualizado_en();


-- ============================================================
--  8. DATOS DE EJEMPLO  (para ver el modelo funcionando)
--     Puedes borrar esta sección cuando ya no la necesites.
-- ============================================================

-- Dos ejercicios en el catálogo
insert into ejercicios (id, nombre, grupo_muscular, requiere_material) values
  ('11111111-1111-1111-1111-111111111111', 'Jumping jacks', 'cardio',  false),
  ('22222222-2222-2222-2222-222222222222', 'Sentadillas',   'piernas', false);

-- Una rutina OFICIAL (owner_id NULL)
insert into rutinas (id, nombre, duracion_min, intensidad, material, owner_id) values
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Circuito en el patio', 15, 'media', 'ninguno', null);

-- Sus ejercicios, en orden, con series y segundos
insert into rutina_ejercicios (rutina_id, ejercicio_id, posicion, series, trabajo_seg, descanso_seg) values
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 1, 3, 30, 10),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', 2, 3, 40, 15);


-- ============================================================
--  CONSULTA CLAVE: traer una rutina completa para el cronómetro
--  (rutina + sus ejercicios en orden). Esto es lo que pide tu app.
-- ============================================================
--
--   select re.posicion, e.nombre, re.series, re.trabajo_seg, re.descanso_seg
--   from   rutina_ejercicios re
--   join   ejercicios e on e.id = re.ejercicio_id
--   where  re.rutina_id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'
--   order  by re.posicion;
--
-- ============================================================


-- ============================================================
--  APÉNDICE — Si usas SUPABASE (recomendado)
--  --------------------------------------------------------
--  Supabase ya trae su propia tabla de login: auth.users.
--  Entonces NO uses la tabla 'usuarios' de arriba; en su lugar
--  reemplaza las referencias 'usuarios(id)' por 'auth.users(id)'
--  y activa Row Level Security (RLS) para que cada usuario solo
--  pueda tocar SUS rutinas. Ejemplo de políticas:
--
--   alter table rutinas enable row level security;
--
--   -- Cualquiera puede ver rutinas oficiales o las suyas
--   create policy "ver_rutinas" on rutinas for select
--     using (owner_id is null or owner_id = auth.uid());
--
--   -- Solo puedes crear/editar/borrar rutinas tuyas
--   create policy "editar_propias" on rutinas for all
--     using (owner_id = auth.uid())
--     with check (owner_id = auth.uid());
--
--  (Las rutinas oficiales las cargas tú como admin, sin RLS.)
-- ============================================================
