// const text = "123490";

// function getNumberFromStr(str) {
// 	const zero = "0".charCodeAt();
// 	let num = 0;
// 	for (let i = 0; i < str.length; i += 1) {
// 		if (num === 0) {
// 			num = str[i].charCodeAt() - zero;
// 		} else {
// 			num = num * 10 + (str[i].charCodeAt() - zero);
// 		}
// 	}
// 	console.log(num);
// 	return num;
// }

// getNumberFromStr(text);

const text =
	"My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat";
//-gr 👇
function getNumberFromStr(str) {
	const zero = "0".charCodeAt();
	const min = 48;
	const max = 57;

	let num = 0;
	let currentNum = 0;
	for (let i = 0; i < str.length; i += 1) {
		if (str[i].charCodeAt() >= min && str[i].charCodeAt() <= max) {
			currentNum = currentNum * 10 + (str[i].charCodeAt() - zero);
		} else {
			if (currentNum) {
				if (!num) {
					num += currentNum;
				} else {
					num -= currentNum;
				}
				currentNum = 0;
			}
		}
	}
	console.log(num);
}
// getNumberFromStr(text);

// function getNumberFromStrReverse(str) {
// 	const zero = "0".charCodeAt();
// 	let num = 0;
// 	let currentNum = 0;
// 	let prev = 0;

// 	for (let i = 0; i < str.length; i += 1) {
// 		if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
// 			currentNum = currentNum * 10 + (str[i].charCodeAt() - zero);
// 		} else {
// 			if (currentNum) {
// 				num += currentNum;
// 				prev = currentNum;
// 				currentNum = 0;
// 			} else if (i + 1 === str.length) {
// 				num = prev - (num - prev);
// 			}
// 		}
// 	}
// 	console.log(num);
// }
const text2 =
	"I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.";
// const text2 = "45400";
getNumberFromStrReverse(text2);

function getNumberFromStrReverse(str) {
	const zero = "0".charCodeAt();
	const nine = "9".charCodeAt();

	let num = 0;
	let power = 1;
	let balance = 0;

	for (let i = str.length - 1; i >= 0; i -= 1) {
		const codeI = str[i].charCodeAt();

		if (codeI >= zero && codeI <= nine) {
			const digit = codeI - zero;
			if (digit) {
				num += digit * power;
			}
			power *= 10;
			continue;
		}
		if (num) {
			balance = balance ? balance - num : num;
			num = 0;
			power = 1;
			continue;
		}
	}
	console.log(balance);
}
