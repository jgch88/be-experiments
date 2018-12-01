// To serve as a data container for storing one off numerical 
// estimates from participants

const estimates = {
  init(experimentName) {
    this._experimentName = experimentName;
    this._estimates = [];
    // to store info such as IP address, time, other metadata about
    // participant
    this._estimateInfo = []; 
    this._estimateLowerBound;
    this._estimateUpperBound;
  },
  setEstimateBoundaries(lowerBound, upperBound) {

  },
  addEstimate(estimate, info) {
    this._estimates.push(estimate);
    this._estimateInfo.push(info);
  },
  get average() {

  },
  get median() {

  }
};

module.exports = estimates;
