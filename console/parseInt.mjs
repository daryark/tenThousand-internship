import testSomeFunction from "../testData/testSomeFunction.mjs";

// testSomeFunction(parseInt, "function");
// console.log([1, 2, 3].toString());
// console.log({ 1: 1, 2: 2 }.toString());
// console.log(parseInt([1, 2, 3]));

// first symbol can be "-" minus symbol
//Symbol - TypeError, cannot convert to string
//array - parses first number integer
//all other types - NaN

function myParseInt(arg) {
	if (typeof arg === "symbol") {
		throw new TypeError("TypeError, Cannot convert a Symbol value to a string");
	}
	if (!arg || arg === Infinity || arg === -Infinity) {
		return NaN;
	}

	const arr = String(arg).split("");
	let code = arr[0].charCodeAt();

	//45 - //43 +
	//48-57 numbers
	if (code !== 45 && code !== 43 && !(code >= 48 && code <= 57)) {
		return NaN;
	} else {
		return convertToNumber(parseNumericString(arr));
	}
}

function parseNumericString(arr) {
	let toParse = "";

	for (let i = 0; i < arr.length; i += 1) {
		let code = arr[i].charCodeAt();

		if (code === 45 || code === 43 || (code >= 48 && code <= 57)) {
			toParse += arr[i];
		} else {
			return toParse;
		}
	}
	return toParse;
}

function convertToNumber(str) {
	let number = 0;
	let isPositive = true;

	for (let i = 0; i < str.length; i += 1) {
		let code = str[i].charCodeAt();

		if (!i) {
			switch (str[i]) {
				case "-":
					isPositive = !isPositive;
					break;

				case "+":
					break;

				default:
					number = toNumber(number, code);
					break;
			}
		} else if (code >= 48 && code <= 57) {
			number = toNumber(number, code);
		}
	}
	return isPositive ? number : -number;
}

//
function toNumber(n, code) {
	return n * 10 + (code - "0".charCodeAt());
}

// console.log(parseInt(-24e3));
// console.log(myParseInt(-24e3));
// console.log(myParseInt(-8.89));
testSomeFunction(myParseInt, "function");
