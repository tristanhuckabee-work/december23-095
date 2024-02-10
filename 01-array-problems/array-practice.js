const findMinimum = arr => {
  if (!arr.length) return;

  let min = Infinity;
  arr.forEach(el => el < min ? min = el : null) // n
  return min;
};

const runningSum = arr => {
  arr.forEach((_el, i) => {
    if (arr[i] + arr[i - 1]) arr[i] = arr[i] + arr[i - 1];
  }); // n
  return arr;
};

const evenNumOfChars = arr => arr.filter(el => el.length % 2 === 0).length; // n

const smallerThanCurr = arr => {
  let sorted = arr.slice().sort();
  let count = {};

  sorted.forEach((el, i) => {
    if (!count[el]) count[el] = i;
  }); // n^2

  return arr.map(el => count[el]);
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf( target - arr[i] ) !== -1) return true;
  } // n^2
  return false;
};

const secondLargest = arr => {
  let sorted = arr.sort(); // n
  return sorted[sorted.length - 2];
};

const shuffle = (arr) => {
  let seen = {};
  let res = [];

  while (res.length != arr.length) {
    let idx = Math.floor(Math.random() * arr.length);
    if (!seen[idx]) {
      seen[idx] = 1;
      res.push(arr[idx])
    }
  } // n
  return res;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
