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
// 48-57

function getNumberFromStr(str) {
	const zero = "0".charCodeAt();

	let num = 0;
	let currentNum = 0;
	for (let i = 0; i < str.length; i += 1) {
		if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
			currentNum = currentNum * 10 + (str[i].charCodeAt() - zero);
		} else {
			num += currentNum;
			currentNum = 0;
		}
	}
	console.log(num);
}

getNumberFromStr(text);
