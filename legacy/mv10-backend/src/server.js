// ============================================================
//  Servidor Express — API + PWA
//  Sirve la API en /api/* y el frontend estático desde /public
// ============================================================
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import authRoutes from './routes/auth.js';
import rutinaRoutes from './routes/rutinas.js';
import ejercicioRoutes from './routes/ejercicios.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- API ---
app.get('/api/health', (req, res) => res.json({ ok: true, servicio: 'ef-rutinas' }));
app.use('/api/auth', authRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/ejercicios', ejercicioRoutes);

// --- Frontend PWA (estático) ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// Cualquier ruta que no sea /api devuelve el index (para el PWA)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Servidor EF Rutinas escuchando en http://localhost:${port}`);
});
