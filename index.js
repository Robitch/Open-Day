const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
  const {a, b} = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  res.send(`The sum is ${sum}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

