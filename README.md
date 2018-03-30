# Crypto Secure Shuffle

[![Build Status](https://travis-ci.org/dhessler/crypto-secure-shuffle.svg?branch=master)](https://travis-ci.org/dhessler/crypto-secure-shuffle)[![Coverage Status](https://coveralls.io/repos/github/dhessler/crypto-secure-shuffle/badge.svg?branch=master)](https://coveralls.io/github/dhessler/crypto-secure-shuffle?branch=master)

Cryptographically secure shuffle using the Durstenfeld algorithm with a CSPRNG.

This provides an unbiased algorithm for producing random permutations of a given array.

# Install

```sh
$ npm install crypto-secure-shuffle
```

# Usage

Note the original array is mutated, as it is shuffled in place for efficiency.
Also note that this method is asynchronous.
For convenience the returned promise resolves to the shuffled array.

```js
const shuffle = require("crypto-secure-shuffle");

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// shuffles the array in-place
await shuffle(arr);

// e.g., [ 7, 3, 5, 0, 6, 9, 4, 2, 1, 8 ]
console.log(arr);
```

# License

[ISC](LICENSE.md)
