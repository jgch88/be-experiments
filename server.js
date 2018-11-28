const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

const server = app.listen(PORT, () => {
  const [port] = server.address();
  console.log(`Listening at port ${port}`);
});

module.exports = app;
