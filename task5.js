Array.prototype.reduce = function (combiner, initialValue) {
  if (typeof combiner !== "function") {
    throw new TypeError(combiner + " is not a function");
  }

  let accum, index;
  if(initialValue !== undefined) {
    accum = initialValue;
    index = 0;
  }
  else if(this.length === 0) {
    throw new TypeError();
  }
  else{
    accum = this[0];
    index = 1;
  }

  for(let i = index; i < this.length; i++){
    if(i in this && typeof this[i] === 'number'){
      accum = combiner(accum, this[i], i, this);
    }
  }

  return accum;
};

 console.log([1,2,3].reduce(function(memo, item) { return memo + item; })); 
 console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));

  console.log([1, 'mistake', 3].reduce(function(memo, item) { return memo + item; }));
  console.log([1, ,3].reduce(function(memo, item) { return memo + item; }));

