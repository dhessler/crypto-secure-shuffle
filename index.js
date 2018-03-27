"use strict";

const secureRandomInRange = require("random-number-csprng");

function secureShuffle(array) {
  const promises = [];

  // generate an array of random numbers using a CSPRNG
  for (let i = array.length - 1; i > 0; i--) {
    promises.push(secureRandomInRange(0, i));
  }

  return Promise.all(promises).then(randomNumbers => {
    // apply durstenfeld shuffle with previously generated random numbers
    for (let i = array.length - 1; i > 0; i--) {
      const j = randomNumbers[array.length - i - 1];
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  });
}

module.exports = secureShuffle;
