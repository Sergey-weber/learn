const string = 'AAABBBCEEAA';

const f = (str) => {
  let item = str[0];
  let count = 0;
  let result = '';
  let prev = str[0];

  for( const s of str  ) {
    // prev = s;

    // const only = Object.keys(string).map(i => string[i] === s ? string[i] : '');

    // console.log(only)

    if ( s === item ) {
      count++;
    } else {
      result += item + ( count > 1 ? count : '' );
      item = s;
      count = 1;
    }
  }

  result += item + ( count > 1 ? count : '' );

  return result;
}

// console.log(f(string)); //A3B3CE2

function order(words){
  const n = /\d+/g;
  const list = words.split(' ');
  let currentNumber = 0;
  let result = [];

  list.map(i => {
    const number = i.match(n);
    
    if(number > currentNumber) {
      result.push(` ${i}`);
    } else {
      result.unshift(` ${i}`);
    }

    currentNumber = number;
  });

  return result;
}

// "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"

console.log(order('is2 Thi1s T4est 3a'));