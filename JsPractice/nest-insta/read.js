// const fs = require('fs')
// let fileContent = fs.readFileSync("./input.txt", "utf8");

// const [a, b] = fileContent.toString().split(' ')

// console.log(a, b)

// const result = Number(a) + Number(b)

// fs.writeFileSync("output.txt", result.toString())


sum = (data) => {
  let mas = data.toString().split(' ');
  return +mas[0] + +mas[1];
};

let cnt, res;
process.stdin.on('data', data => {
  res = sum(data);
  process.stdout.write(res + '');
  process.exit();
});