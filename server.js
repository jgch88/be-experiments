const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const estimatesForExptA = [512];
const estimatesForExptB = [2250];


const add = (a,b) => {
  a + b
};

app.get('/experiment/:expName/:section', (req, res) => {
  const expName = req.params.expName;
  const section = req.params.section;

  const averageEstimateForExptA = estimatesForExptA.reduce(add) / estimatesForExptA.length;

  results = {
    yourEstimate: 1077,
    averageEstimateForExptA: averageEstimateForExptA,
    medianEstimateForExptA: 512,
    medianEstimateForExptB: 2250,
    answer: 40320
  }

  if (expName == 'anchoring' && section == 'results') {
    res.json(results);
  } else {
    res.status(400);
    res.json({ error: 'Bad request' });
    return;
  }

});

app.post('/experiment/:expName/:data', (req, res) => {
  // strategy pattern for each exp datatype..
  console.log(req.body);
  res.json({ message: 'success!' });
});

const server = app.listen(PORT, () => {
  const { port } = server.address();
  console.log(`Listening at port ${port}`);
});

module.exports = app;
