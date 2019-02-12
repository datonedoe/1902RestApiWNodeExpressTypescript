import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hi Darwin');
});

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started');
});