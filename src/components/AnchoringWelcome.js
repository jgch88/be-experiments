import React, { Component } from 'react';

export default function AnchoringWelcome(props) {
  return (
    <div class="container">
      <h1 class="title">
        Anchoring
      </h1>
      <p class="subtitle">
        You have <i>5 seconds</i> to guess the answer to the next question.
      </p>
      <p class="subtitle">
        Ready?
      </p>
      <a class="button is-primary">
        I'm ready!
      </a>
    </div>
  )
}
