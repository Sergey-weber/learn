// Carry

// function curry(arg) {
//   const value = arg;

//   return function(arg) {
//     if(arg && typeof arg !== 'function') {

//       return curry(value + arg)
//     } else {
//       return value;
//     }
//   }
// }

function foo(value) {
	var acc = value;
	function addNext(next) {
		acc += next;
		return addNext;
	}
	addNext.toString = addNext.valueOf = function () {
		return acc;
	}
	return addNext;
}

// console.log(foo(0)(2)(3)(1)(1));

// Дано дерево, надо найти сумму всех вершин.
const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
	{
		valueNode: 3,
		next: null
	},
	{
		valueNode: 2,
		next: null
	},
	{
		valueNode: 2,
		next: [
			{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 5,
				next: null
			}
		]
	}]
};

const sum = (obj) => {
	const arr = [obj];
	let sum = 0,
		current;


	while (arr.length > 0) {
		current = arr.shift();

		console.log(current)
	}
}

// sum(tree);


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
// 	if((nums[0] + nums[1]) === target) return [0, 1]; 

// 	const res = [];

// 	for(let i = 1; i < nums.length; i++) {
// 		for(let k = i + 1; k < nums.length; k++) {
// 			console.log()
// 			if ( (nums[i] + nums[k]) === target )
// 				res.push(i, k);
// 		}
// 	}

// 	return res;
// };

// const twoSum = function(nums, target) {
// 	const result = [];

// 	for(let i = 0; i < nums.length; i++) {
// 		const diff = target - nums[i];
// 		const k = nums.indexOf(diff);

// 		if(k > -1 && k !== i) {
// 			return [i, k];
// 		}
// 	}
// }

const twoSum = function (numbers, target) {
	const obj = {};

	for (let i = 0; i < numbers.length; i++) {
		const currentNum = numbers[i];

		obj[currentNum] = i;
	}

	for (let i = 0; i < numbers.length; i++) {
		const diff = target - numbers[i];

		if (obj.hasOwnProperty(diff) && obj[diff] !== i) {
			return [obj[diff] + 1, i + 1];
		}
	}
}

// console.log(twoSum([2,7,11,15], 9));

var reverse = function (x) {
	let reverseX = 0;
	const isNegative = x < 0;
	x = Math.abs(x);

	while (x) {
		reverseX = reverseX * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return reverseX > 0x7FFFFFFF ? 0 : isNegative ? -reverseX : reverseX;
};

// console.log(reverse(-123));

var runningSum = function (nums) {
	const res = [];
	let currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		const sum = (i === 0 ? nums[i] : currentSum) + (nums[i + 1] || 0);

		if (nums[i + 1] !== undefined) {
			if (i === 0) {
				res.push(nums[i]);
			} else {
				res.push(currentSum);
			}
			currentSum = sum;
		} else {
			res.push(currentSum);
		}
	}

	return res;
};
const input = [0, 63, -23, 60, -27, -73, -53, -5, 63, 68, -85, -82, -1, -11, 96, 19, 33, -72, -93, -44, -65, -60, 17, 95, -98, -43, -67]
// console.log(runningSum(input)); // => [1,3,6,10]


var fib = function (N) {
	console.log('N: ', N);
	if (N <= 1) {
		return N;
	}

	return fib(N - 1) + fib(N - 2)
};

// console.log(fib(6));


const minN = (nums) => {
	let n = nums[0];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < n && n !== nums[i]) {
			n = nums[i];
		}
	}

	return n;
};

// console.log(minN([ 2, 5, 100, 33, 74, 2, 9,14, 115, 1]));

var numIdenticalPairs = function (nums) {
	let ans = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] === nums[j] && i < j) {
				ans++;
			}
		}
	}

	return ans;
};

// console.log(numIdenticalPairs([1,2,3,1,1,3])); // => 4
// Not close
var plusOne = function (digits) {
	let res = [];

	for (let i = 0; i < digits.length; i++) {
		if (digits[i] !== 9) {
			digits[i]++;
			return digits
		} else {
			digits[i] = 0;
		}
	}

	digits.unshift(1);
	return digits;
};

// console.log(plusOne([1,2,3,4,5,5])) // => [1,2,4]

var defangIPaddr = function (address) {
	const str = address.split('');
	let res = '';

	for (let i = 0; i < str.length; i++) {
		const dott = '.'

		if (str[i] === dott) {
			res += `[${dott}]`;
		} else {
			res += str[i];
		}
	}

	return res;
};

// console.log(defangIPaddr('1.1.1.1')) // => '1[.]1[.]1[.]1'

var findLUSlength = function (a, b) {
	let count = 0;

	if (a.length === b.length) {
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b[i]) {
				count++;
			}
		}

		return count === a.length ? -1 : a.length;
	}

	return
}

// console.log(findLUSlength('aba', 'cdc')); // => 3

var decompressRLElist = function (nums) {
	const half = nums.length / 2;
	let leftSide = [];
	let rightSide = [];

	const sum = (a, b) => {
		let r = [];

		for (let i = 0; i < a; i++) {
			r.push(b);
		}

		return r;
	}

	for (let i = 0; i <= nums.length; i++) {
		if (i < half) {
			console.log('half: ', sum(nums[i], nums[i + 1]));
			leftSide = sum(nums[i], nums[i + 1]);
		} else {
			rightSide = i !== nums.length - 1 && sum(nums[i], nums[i + 1]);
		}
	}
	const result = [...leftSide, rightSide];
	console.log(result);

	return [...leftSide, rightSide];
};

// Input: nums = [1,1,2,3]
// Output: [1,3,3]

// decompressRLElist([1, 1, 2, 3]); // => [1, 3, 3];

/**
 * @param {number[]} nums
 * @return {number} 
 */
var minStartValue = function (nums) {
	let minPrevSum = nums[0];
	let prevSum = 0;

	for (let i = 0; i < nums.length; i++) {
		prevSum += nums[i];
		minPrevSum = Math.min(prevSum, minPrevSum);
	}

	const res = 1 - minPrevSum;

	return res > 0 ? res : 1;
};

// console.log(minStartValue([1, -2, -3]))

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
	let res = [...arr];
	let length = res.length;
	let counter = 0;
	let summ = 0;

	while (counter < length) {
		const min = Math.min(...res);
		const max = Math.min(...res);

		if (res[counter] === min || res[counter] === max) {
			res.splice(counter, 1);

			summ += res[counter] ? res[counter] : 0;
		}

		if ((counter - 1) >= length) {
			counter = 0
		} else {
			counter++;
		}
	}

	return summ - Math.min(...res) - Math.max(...res);
};

// console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]));

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let result = 0;
	let set = new Set();

	for (let i = 0; i < s.length; i++) {
		if (set.has(s[i])) {
			result += 2;

			set.delete(s[i]);
		} else {
			set.add(s[i]);
		}
	}

	if (set.size > 0) result += 1;

	return result;
};

// console.log('longestPalindrome: ', longestPalindrome('a124bb123'));

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	const rArr = [];

	for (let i = 0; i < arr.length; i++) {
		const nextItem = arr[i + 1];
		const nextSecondItem = arr[i + 2];

		rArr.push(arr[i]);

		if (arr[i] === 0 && (i !== arr.length - 1) && nextSecondItem) {
			// arr[nextItem] = 0;

			// arr[nextSecondItem] = nextItem;

			// rArr.push(0);
		}
	}

	// arr = rArr;

	// return rArr;
};

let duplicateZerosArr = [1, 0, 2, 3, 0, 4, 5, 0];

duplicateZeros(duplicateZerosArr)
// console.log(duplicateZeros(duplicateZerosArr))

console.log(duplicateZerosArr);
