const secureRandomInRange = require("random-number-csprng");

/**
 * Shuffles the provided array using the Durstenfeld algorithm with a
  cryptographically secure pseudo random number generator.
  This produces an unbiased random permutation of the original array.
 *
 * Note: This method mutates the original array.
 * @param array The array to shuffle.
 * @returns A promise which resolves to the shuffled array.
 */
async function secureShuffle<T>(array: T[]) {
  const promises: number[] = [];

  // asynchronously generate an array of random numbers using a CSPRNG
  for (let i = array.length - 1; i > 0; i--) {
    promises.push(secureRandomInRange(0, i));
  }

  const randomNumbers = await Promise.all(promises);

  // apply durstenfeld shuffle with previously generated random numbers
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomNumbers[array.length - i - 1];
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export = secureShuffle;

namespace secureShuffle {

}
