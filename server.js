const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// data structure and validation limits
const estimatesForExptA = [512];
const estimatesForExptB = [2250];

const add = (a,b) => {
  a + b
};

app.get('/experiment/:expName/:section', (req, res) => {
  const expName = req.params.expName;
  const section = req.params.section;

  var sum = 0;

  for (var i = 0; i < estimatesForExptA.length; i++) {
    sum += estimatesForExptA[i];
  }

  const averageEstimateForExptA = sum / estimatesForExptA.length;

  results = {
    yourEstimate: 1077,
    averageEstimateForExptA: averageEstimateForExptA,
    medianEstimateForExptA: averageEstimateForExptA,
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
  estimatesForExptA.push(parseInt(req.body.guess));
  console.log(estimatesForExptA);
  res.json({ message: 'success!' });
});

const CAPTCHA_SECRET = `6LeHSX4UAAAAAEm6JDhWTLJGciuLyLTpc68E5EaK`;

app.post('/verifycaptcha/:value', (req, res) => {
  // once user has gotten a value from filling in google's reCAPTCHA
  // verify the value against Google's API
  console.log('Verifying reCAPTCHA with Google\'s API');
  console.log(req.params.value);
  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET}&response=${req.params.value}`)
  .then((response) => {
    console.log(response.data);
    if (response.data.success) {
      res.json({ 
        success: true,
        message: 'captcha verified' 
      });
    } else {
      res.json({ 
        success: false,
        message: 'captcha invalid' 
      });
    }
  })
  .catch((error) => {
    console.log(error);
    res.json({ message: 'error verifying captcha' });
  });


});

const server = app.listen(PORT, () => {
  const { port } = server.address();
  console.log(`Listening at port ${port}`);
});

module.exports = app;
