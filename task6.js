var ratings = [2, 3, 1, 4, 5];

const maxValue = ratings.reduce((max, x) => Math.max(max, x));
console.log(maxValue);