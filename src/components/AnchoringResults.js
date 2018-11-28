/** @jsx h */
const { h, render, Component } = preact;

const AnchoringResults = function AnchoringResults(props) {
  return (
    <div class="container">
      <h1 class="title">
        Anchoring
      </h1>
      <p class="subtitle">
        Results
      </p>
      <p class="subtitle">
        Your estimate: <strong>1077</strong>
      </p>
      <progress class="progress is-primary" value="1077" max="40320"></progress>
      
      <p class="subtitle">
        Median estimate for your experiment (1 &times; 2 &times; 3 &times; 4 &times; 5 &times; 6 &times; 7 &times; 8): <strong>512</strong>
      </p>
      <progress class="progress is-primary" value="512" max="40320"></progress>

      <p class="subtitle">
        Median estimate for the other experiment (8 &times; 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1): <strong>2,250</strong>
      </p>
      <progress class="progress is-primary" value="2250" max="40320"></progress>
    
      <p class="subtitle">
        Answer: <strong>40,320</strong>
      </p>
      <progress class="progress is-primary" value="40320" max="40320"></progress>

      <h1 class="title">
        Why?
      </h1>
      <p class="subtitle">
        Subjects of this experiment take the initial, uninformative number as their starting point or <i>anchor</i>, and then they <i>adjust</i> upward from their starting estimate until they reached an answer that <i>sounded plausible</i>, and then they stopped adjusting.
      </p>
      <p class="subtitle">
        This typically results in under-adjustment from the anchor. In both experiments, the adjustments were insufficient, relative to the true value of <strong>40,320</strong>!
      </p>
    </div>
  )
}

module.exports = AnchoringResults;
