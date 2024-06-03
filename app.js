import express from 'express';
import config from 'config';

const app = express();
console.log(config.get('ENV'));

const port = config.get('PORT') || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
