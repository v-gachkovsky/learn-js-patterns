import microtime from 'microtime';

function benchmark(targetFunction, arrLeft, arrRight) {
  const startTimestamp = microtime.now();
  const result = targetFunction(arrLeft, arrRight);
  const endTimestamp = microtime.now();

  console.log(`${targetFunction.name} spend ${endTimestamp - startTimestamp} milliseconds. Result is ${result}`)
}

const makeParams = (startFrom, size, squared) => Array.from({ length: size },
  (v, k) => squared
    ? (k + startFrom) ** 2
    : k + startFrom
  );

export { benchmark, makeParams };
