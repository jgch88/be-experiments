import React, { Component } from 'react';

export default function AnchoringExperimentA(props) {
  return (
    <div class="container">
      <h1 class="title">
        Anchoring
      </h1>
      <p class="subtitle">
        What is 
      </p>
      <p class="subtitle">
        1 &times; 2 &times; 3 &times; 4 &times; 5 &times; 6 &times; 7 &times; 8?
      </p>
      
      <progress class="progress is-primary" value="3" max="5"></progress>

      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Answer" />
        </div>
      </div>
      <a class="button is-primary">
        Submit
      </a>
    </div>
  )
}
