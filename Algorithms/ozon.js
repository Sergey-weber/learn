const fs = require('fs');


// const stdin = [1,2,2,1,2,3,4];

// const stdout = (l) => {
//   const r = [];
//   const start = l[0];
//   let count = 0;

//   for(let i = 0; i < l.length; i++) {
//     if(start == l[i]) {
//       count++;
//     }
//   };
//     console.log(r)
//   return Object.keys(r).filter(i => r[i] === 1);

//   // return r.length == 1 ? r[0] : stdout(r);
// };

// console.log(stdout(stdin))

const arr = [1, 7, 3, 4, 7, 9];

function sum (arr, input) {
  let first = arr[0];
  let r = 0;

  for(let i = 1; i < arr.length; i++) {
    const s = arr[i] + first;
    
    if(s == input) r = 1;
  }

  return r;
};

fs.writeFile('input.txt', arr, (err) => {});

fs.writeFile('output.txt', sum(arr, 5), (err) => {});