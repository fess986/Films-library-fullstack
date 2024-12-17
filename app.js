import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import cors from 'cors';
import { ApiRoutes } from './const/const.js';

const app = express();
const port = config.get('PORT') || 4000;
console.log(config.get('ENV'));

// Настройка CORS
app.use(cors({
  origin: "http://localhost:5173", //  адрес фронтенда
  methods: ["GET", "POST", "PUT", "DELETE"], // допустимые методы
  allowedHeaders: ["Content-Type", "Authorization"], // заголовки, которые мы хотим поддерживать
}));

app.use(express.json({ extended: true }));

// app.use('/api/link', require('./routes/link.routes')) так можно импортировать только когда работаем не с ES5
app.use(ApiRoutes.AUTH, (await import('./routes/auth.routes.js')).default);  // динамический импорт
// app.use(ApiRoutes.FILMS, (await import('./routes/films.routes.js')).default);  // динамический импорт
app.use('/api/films', (await import('./routes/films.routes.js')).default);  // динамический импорт

const start = async () => {
  try {
await mongoose.connect(config.get('mongoUri'), {})

app.listen(port, () => console.log(`Server started on port ${port}`));
    
  } catch (e) {
    console.log(e.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

start();

