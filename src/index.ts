// src/index.ts

import express from 'express';
import authRoutes from './routes/auth.route';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/auth', authRoutes); // <- authRoutes must be a router

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});