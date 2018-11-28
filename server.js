const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const server = app.listen(PORT, () => {
  const { port } = server.address();
  console.log(`Listening at port ${port}`);
});

module.exports = app;
