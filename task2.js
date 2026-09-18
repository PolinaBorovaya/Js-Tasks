Array.prototype.filter = function(predicateFunction) {
  const result = [];

  this.forEach((x, i, arr) => {
    if(predicateFunction(x, i, arr)) 
        result.push(x);
  });

  return result;
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]");
