// const romanToInt = function (s) {
// 	const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// 	let res = 0;

// 	for (let i = 0; i < s.length; i += 1) {
// 		const next = numbers[s[i + 1]];
// 		const curr = numbers[s[i]];

// 		if (curr < next) {
// 			res += next - curr;
// 			i += 1;
// 		} else {
// 			res += curr;
// 		}
// 	}
// 	return res;
// };

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
