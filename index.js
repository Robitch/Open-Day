const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
  const { a, b } = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  res.send(`The sum is ${sum}`);
});

app.get('/subtraction', (req, res) => {
  const { a, b } = req.query;
  const difference = parseFloat(a) - parseFloat(b);
  res.send(`The difference is ${difference}`);
});

app.get('/multiplication', (req, res) => {
  const { a, b } = req.query;
  const product = parseFloat(a) * parseFloat(b);
  res.send(`The product is ${product}`);
});

app.get('/division', (req, res) => {
  const { a, b } = req.query;
  const quotient = parseFloat(a) / parseFloat(b);
  res.send(`The quotient is ${quotient}`);
});

app.get('/modulus', (req, res) => {
  const { a, b } = req.query;
  const remainder = parseFloat(a) % parseFloat(b);
  res.send(`The remainder is ${remainder}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

