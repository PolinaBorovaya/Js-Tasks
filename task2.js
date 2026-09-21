Array.prototype.filter = function(predicateFunction) {
  const result = [];

  this.forEach((element, index, array) => {
    if(predicateFunction(element, index, array)) {
        result.push(element);
    }
  });

  return result;
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]");
