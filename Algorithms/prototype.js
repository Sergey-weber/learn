Array.prototype.partition = function(pred) {
  let passed = [];
  let failed = [];
  
  for(let i = 0; i <= this.length; i++) {
    if(pred[this[i]]) {
      passed.push(this[i])
    } else {
      failed.push(this[i])
    }
  }

  return [ passed, failed ];
};

console.log([1,2,3,4,5].partition(e => e <=3 ))
