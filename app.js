import express from 'express';
import config from 'config';
import mongoose from 'mongoose';

const app = express();
const port = config.get('PORT') || 4000;
console.log(config.get('ENV'));

app.use(express.json({ extended: true }));

// app.use('/api/link', require('./routes/link.routes')) так можно импортировать только когда работаем не с ES5
app.use('/api/auth', (await import('./routes/auth.routes.js')).default);  // динамический импорт

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

