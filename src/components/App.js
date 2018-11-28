/** @jsx h */
const { h, render, Component } = preact;

const AnchoringWelcome = require('./AnchoringWelcome.js');
const AnchoringExperimentA = require('./AnchoringExperimentA.js');
const AnchoringResults = require('./AnchoringResults.js');

const App = function App(props) {
  return (
    <div class="container">
      <AnchoringResults />
    </div>
  )
}

module.exports = App;
