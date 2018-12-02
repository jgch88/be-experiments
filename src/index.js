'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AnchoringWelcome from './components/AnchoringWelcome.js';
import AnchoringExperimentA from './components/AnchoringExperimentA.js';
import AnchoringResults from './components/AnchoringResults.js';
import CaptchaCheck from './components/CaptchaCheck.js';

ReactDOM.render(
  <Router>
    <div>
      <nav class="level">
        <div class="level-item has-text-centered">
          <Link to ={`/anchoring/welcome`}>Anchoring</Link>
        </div>
        <div class="level-item has-text-centered">
          <Link to ={`/anchoring/experimentA`}>Anchoring Experiment A</Link>
        </div>
        <div class="level-item has-text-centered">
          <Link to ={`/anchoring/results`}>Anchoring Results</Link>
        </div>
        <div class="level-item has-text-centered">
          <Link to ={`/captcha`}>Captcha Check</Link>
        </div>
      </nav>
      <Route exact path="/anchoring/welcome" component={AnchoringWelcome} />
      <Route exact path="/anchoring/experimentA" component={AnchoringExperimentA} />
      <Route exact path="/anchoring/results" component={AnchoringResults} />
      <Route exact path="/captcha" component={CaptchaCheck} />
    </div>
  </Router>,
  document.getElementById('react_app_root')
)
