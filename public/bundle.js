(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/** @jsx h */
var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;

var AnchoringExperimentA = function AnchoringExperimentA(props) {
  return h("div", {
    "class": "container"
  }, h("h1", {
    "class": "title"
  }, "Anchoring"), h("p", {
    "class": "subtitle"
  }, "What is"), h("p", {
    "class": "subtitle"
  }, "1 \xD7 2 \xD7 3 \xD7 4 \xD7 5 \xD7 6 \xD7 7 \xD7 8?"), h("progress", {
    "class": "progress is-primary",
    value: "3",
    max: "5"
  }), h("div", {
    "class": "field"
  }, h("div", {
    "class": "control"
  }, h("input", {
    "class": "input",
    type: "text",
    placeholder: "Answer"
  }))), h("a", {
    "class": "button is-primary"
  }, "Submit"));
};

module.exports = AnchoringExperimentA;

},{}],2:[function(require,module,exports){
"use strict";

/** @jsx h */
var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;

var AnchoringResults = function AnchoringResults(props) {
  return h("div", {
    "class": "container"
  }, h("h1", {
    "class": "title"
  }, "Anchoring"), h("p", {
    "class": "subtitle"
  }, "Results"), h("p", {
    "class": "subtitle"
  }, "Your estimate: ", h("strong", null, "1077")), h("progress", {
    "class": "progress is-primary",
    value: "1077",
    max: "40320"
  }), h("p", {
    "class": "subtitle"
  }, "Median estimate for your experiment (1 \xD7 2 \xD7 3 \xD7 4 \xD7 5 \xD7 6 \xD7 7 \xD7 8): ", h("strong", null, "512")), h("progress", {
    "class": "progress is-primary",
    value: "512",
    max: "40320"
  }), h("p", {
    "class": "subtitle"
  }, "Median estimate for the other experiment (8 \xD7 7 \xD7 6 \xD7 5 \xD7 4 \xD7 3 \xD7 2 \xD7 1): ", h("strong", null, "2,250")), h("progress", {
    "class": "progress is-primary",
    value: "2250",
    max: "40320"
  }), h("p", {
    "class": "subtitle"
  }, "Answer: ", h("strong", null, "40,320")), h("progress", {
    "class": "progress is-primary",
    value: "40320",
    max: "40320"
  }), h("h1", {
    "class": "title"
  }, "Why?"), h("p", {
    "class": "subtitle"
  }, "Subjects of this experiment take the initial, uninformative number as their starting point or ", h("i", null, "anchor"), ", and then they ", h("i", null, "adjust"), " upward from their starting estimate until they reached an answer that ", h("i", null, "sounded plausible"), ", and then they stopped adjusting."), h("p", {
    "class": "subtitle"
  }, "This typically results in under-adjustment from the anchor. In both experiments, the adjustments were insufficient, relative to the true value of ", h("strong", null, "40,320"), "!"));
};

module.exports = AnchoringResults;

},{}],3:[function(require,module,exports){
"use strict";

/** @jsx h */
var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;

var AnchoringWelcome = function AnchoringWelcome(props) {
  return h("div", {
    "class": "container"
  }, h("h1", {
    "class": "title"
  }, "Anchoring"), h("p", {
    "class": "subtitle"
  }, "You have ", h("i", null, "5 seconds"), " to guess the answer to the next question."), h("p", {
    "class": "subtitle"
  }, "Ready?"), h("a", {
    "class": "button is-primary"
  }, "I'm ready!"));
};

module.exports = AnchoringWelcome;

},{}],4:[function(require,module,exports){
"use strict";

/** @jsx h */
var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;

var AnchoringWelcome = require('./AnchoringWelcome.js');

var AnchoringExperimentA = require('./AnchoringExperimentA.js');

var AnchoringResults = require('./AnchoringResults.js');

var App = function App(props) {
  return h("div", {
    "class": "container"
  }, h(AnchoringResults, null));
};

module.exports = App;

},{"./AnchoringExperimentA.js":1,"./AnchoringResults.js":2,"./AnchoringWelcome.js":3}],5:[function(require,module,exports){
"use strict";

/** @jsx h */
var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;

var App = require('./components/App.js');

render(h(App, null), document.body);

},{"./components/App.js":4}]},{},[5]);
