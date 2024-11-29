const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
  const { a, b } = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  // res.send(`The sum is ${sum}`);
  res.send(`La somme de ${a} et ${b} est égale à ${sum}`);
});

app.get('/subtraction', (req, res) => {
  const { a, b } = req.query;
  const difference = parseFloat(a) - parseFloat(b);
  // res.send(`The difference is ${difference}`);
  res.send(`La différence entre ${a} et ${b} est égale à ${difference}`);
});

app.get('/multiplication', (req, res) => {
  const { a, b } = req.query;
  const product = parseFloat(a) * parseFloat(b);
  // res.send(`The product is ${product}`);
  res.send(`Le produit de ${a} et ${b} est égale à ${product}`);
});

app.get('/division', (req, res) => {
  const { a, b } = req.query;
  const quotient = parseFloat(a) / parseFloat(b);
  // res.send(`The quotient is ${quotient}`);
  res.send(`Le quotient de ${a} et ${b} est égale à ${quotient}`);
});

app.get('/modulus', (req, res) => {
  const { a, b } = req.query;
  const remainder = parseFloat(a) % parseFloat(b);
  // res.send(`The remainder is ${remainder}`);
  res.send(`Le reste de la division de ${a} par ${b} est égale à ${remainder}`);
});

app.get('/power', (req, res) => {
  const { a, b } = req.query;
  const power = Math.pow(parseFloat(a), parseFloat(b));
  // res.send(`The power is ${power}`);
  res.send(`${a} à la puissance ${b} est égale à ${power}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

