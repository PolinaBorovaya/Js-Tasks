var ratings = [2, 3, 1, 4, 5];

const maxValue = ratings.reduce((max, value) => Math.max(max, value));
console.log(maxValue);