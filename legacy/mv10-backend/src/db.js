// ============================================================
//  Conexión a PostgreSQL (pool de conexiones reutilizables)
// ============================================================
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Railway (conexión pública) exige SSL; en local normalmente no.
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
});

pool.on('error', (err) => {
  console.error('Error inesperado en el pool de PostgreSQL:', err);
});

// Atajo para hacer consultas: query('select ...', [params])
export const query = (text, params) => pool.query(text, params);
