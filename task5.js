Array.prototype.reduce = function (combiner, initialValue) {
  let accum, index;
  if(initialValue !== undefined) {
    accum = initialValue;
    index = 0;
  }
  else if(this.length === 0) throw new TypeError();
  else{
    accum = this[0];
    index = 1;
  }

  for(let i = index; i < this.length; i++){
    accum = combiner(accum, this[i], i, this);
  }

  return accum;
};

 console.log([1,2,3].reduce(function(memo, item) { return memo + item; })); 
 console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));
