# Crypto Secure Shuffle

Cryptographically secure shuffle using the Durstenfeld algorithm with a CSPRNG.

# Install

```sh
$ npm install crypto-secure-shuffle
```

# Usage

Note the provided array is shuffled in place, and so the original array is mutated.
Also note that this algorithm is asynchronous, and so returns a promise.
For convenience, the returned promise resolves to the shuffled array.

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
