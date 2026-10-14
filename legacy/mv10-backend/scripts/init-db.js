// ============================================================
//  Aplica schema.sql a la base de datos.
//  Uso:  npm run init-db
//  (Ejecútalo UNA vez sobre una base vacía. Los "create type"
//   fallan si ya existen, señal de que la DB ya está inicializada.)
// ============================================================
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pool } from '../src/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.join(__dirname, '..', 'schema.sql');

try {
  const sql = await readFile(schemaPath, 'utf8');
  await pool.query(sql);
  console.log('✅ Esquema aplicado correctamente.');
} catch (e) {
  console.error('❌ Error aplicando el esquema:', e.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
