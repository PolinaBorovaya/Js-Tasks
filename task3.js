const mas = [ [1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4] ];

const result = mas.sort((a, b) => a.length - b.length);

console.log(result);