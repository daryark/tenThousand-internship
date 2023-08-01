import testSomeFunction from "../testData/testSomeFunction.mjs";

// testSomeFunction("toFixed", "method");

//bigint - error
// NaN - NaN, infinity - infinity
//default - 0 float nums
// digits - argument must be between 0 and 100

Number.prototype.myToFixed = function (digits = 0) {
	if (this !== this || this === Infinity || this === -Infinity) return this;
	if (digits < 0 || digits > 100) {
		throw RangeError("toFixed() digits argument must be between 0 and 100");
	}

	const dot = 46;
	let float = false;
	let str = "";

	const strNum = `${this}`;
	for (let i = 0; i < strNum.length; i += 1) {
		if (float) {
			digits -= 1;
		}
		if (strNum[i].charCodeAt() === dot) {
			if (!digits) return str;
			float = !float;
		}
		str += strNum[i];

		if (float && !digits) return str;
	}
	while (digits) {
		str += "0";
		digits -= 1;
	}

	return str;
};

const myNum = 3353.999;

console.log(myNum.myToFixed(2));
console.log(myNum.myToFixed(101));
console.log(NaN.myToFixed());
