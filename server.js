const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('ok');
});

const server = app.listen(3000, () => {
  port = server.address().port;
  console.log(`Listening at port ${port}`);
});



module.exports = app;


