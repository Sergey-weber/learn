const unique = (array) => {
  // return array.filter((item, index) => array.indexOf(item) === index);
  let output = [];

  // [...new Set(array)]

  for (let i = 0; i <= array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }

  return output;
}

// console.log(unique([1, '2', '2', 2, 'abs', 33])) // => 1, '2', 2

const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args1) {
        return curried.apply(this, args.concat(args1))
      }
    }
  }
};


function addition(...args) {
  return args.reduce((a, b) => a + b)
}

const curried = curry(addition);

// console.log(curried(2)(3)(4));


const ApplicationSettings = {};
const PersonSettings = {};


const currySum = (a = 0) => {
  let sum = a;

  const func = (b = 0) => {
    sum += b;

    return func;
  };

  func.toString = () => sum;
  func.valueOf = () => sum // Перезаписываем valueOf

  return func;
};

// console.log(currySum(1)(1)(1)(7));




const infiniteCurry = fn => {
  const next = (...args) => {
    return x => {
      if (!x) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a)
        }, 0);
      }
      return next(...args, x);
    };
  };
  return next();
};

// const summN = (x, y) => x + y;

// const iSum = infiniteCurry(summN);
// console.log(iSum(1)(3)(4)(2)());

const Curry = () => {
  const summN = (x, y) => x + y;

  const next = (...args) => {
    return x => {

      if (!x) {
        console.log('x: ', x);
        return args.reduce((acc, a) => {
          console.log('acc: ', acc, 'a: ', a);
          return summN.call(summN, acc, a)
        }, 0)
      }

      return next(...args, x);
    }
  }

  return next();
}

const iSum = Curry();
console.log(iSum(1)(3)(4)(2)());