import { benchmark, makeParams } from './benchmarkHelpers';

// Problem O(n ** 2)
function badSame(arrLeft, arrRight) {
  if (arrLeft.length !== arrRight.length) {
    return false;
  }
  
  for (let i = 0; i < arrLeft.length; i++) {
    let correctIndex = arrRight.indexOf(arrLeft[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arrRight.splice(correctIndex, 1);
  }
  
  return true;
}

// Solution O(n)
function same(arrLeft, arrRight) {
  if (arrLeft.length !== arrRight.length) {
    return false;
  }
  const frequencyCounterLeft = {};
  const frequencyCounterRight = {};
  
  for (let val of arrLeft) {
    frequencyCounterLeft[val] = (frequencyCounterLeft[val] || 0) + 1;
  }
  for (let val of arrRight) {
    frequencyCounterRight[val] = (frequencyCounterRight[val] || 0) + 1;
  }
  for (let key in frequencyCounterLeft) {
    if (!(key ** 2 in frequencyCounterRight)) {
      return false;
    }
    if (frequencyCounterRight[key ** 2] !== frequencyCounterLeft[key]) {
      return false;
    }
  }
  return true;
}

benchmark(
  badSame,
  makeParams(100, 1000),
  makeParams(100,1000,true)
);

benchmark(
  same,
  makeParams(100, 1000),
  makeParams(100,1000,true)
);
