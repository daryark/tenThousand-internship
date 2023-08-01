import testSomeFunction from "../../testData/testSomeFunction.mjs";
// testSomeFunction("valueOf", "method");
// console.log(0 || 1);
// console.log(undefined || 0);
// console.log(null || 0);
// console.log(null ?? 0);

//
// testSomeFunction(Number, "function");
// -gr Number
// will return NaN in most types cases
//it can turn string to number, but not parse number from string with other symbols except numbers and math signs
//it also can convert data to number (seconds)

//
// testSomeFunction({ object: Number, method: "isFinite" }, "object.method");
//--pass invalid data variants
// console.log('isFinite', Number.isFinite()); //false
// console.log(Number.isFinite("dfd", 1, {}, 34n, [1, 2, 4])); //false
//-gr Number.isFinite()
//doesn't convert types, just check true/false
//as this method was introduced earlier than BigInt type, it returns false to it even if BigInt(1)
//all other types! then normal finite numbers - are false
//-y usecases:
//input validation (with numeric range)
//calculations and conversions ( after convert BigInt to num- to ensure it is finite)
//loop boundaries ( to ensure you won't start an infinite loop)

//
// testSomeFunction({ object: Number, method: "isInteger" }, "object.method");
//--pass invalid data variants
// console.log('isInteger', Number.isInteger()); //false
// console.log(Number.isInteger(Error, {}, "hi")); //false
//-gr Number.isInteger()
//returns true to integer numbers and numbers with floating point, that can be converted to integers (ex: 5.0)
//all other types and convertations are not possible to be integers
//👇 the case about 64-bit system and its not precise result sometimes.
// console.log(5.0000000000000001); // 5
// console.log(5.000000000000001); // 5.000000000000001

//
// testSomeFunction({ object: Number, method: "isNaN" }, "object.method");
//-gr Number.isNaN()
//only return true for Number.isNaN(NaN); Number.isNaN(Number.NaN); Number.isNaN(0/0);
//in comparison with global isNaN() - which also return true to: {}, undefined, 'blabla', 'NaN'.

//-gr Number.isSafeInteger()
// console.log(Number.isSafeInteger(25343432453543543543543544)); //false
// console.log(Number.isSafeInteger(254)); //true
// console.log(Number.isSafeInteger(2e15)); //true
// console.log(Number.isSafeInteger(6n)); //false
// console.log(Number.isSafeInteger(6.0000000000003)); //false
// console.log(Number.isSafeInteger(5.0000000000000000000000001)); //true

//
// testSomeFunction({ object: Number, method: "parseFloat" }, "object.method");
// testSomeFunction({ object: Number, method: "parseInt" }, "object.method", ["16"]); //-y interesting example with 16 counting system !
//-gr Number.parseFloat()/parseInt()
//work identically to global parseFloat/parseInt functions accordingly

//
// testSomeFunction("toExponential", "method", [2]);
// arg: -1, -1.00e+0
// arg: 3.25, 3.25e+0
//also Infinity will return itself, evrth else - TypeError
//-gr Number.toExponential();
// const num = 12345;
// console.log(num.toExponential()); //1.2345e+4
// console.log(num.toExponential(0)); //1e+4
// console.log(num.toExponential(2)); //1.23e+4j

//
// testSomeFunction("toFixed", "method");
//-gr Number.toFixed()
//RangeError, toFixed() digits argument must be between 0 and 100
//NaN and Infinity return itself, evrth else - error, doesn't covert types

//
// testSomeFunction("toPrecision", "method");
//-gr Number.toPrecision()
//return a string format!! cause it mostly to format, not tu calculate
//but still works only with numbers, throw error for strings and other types, except NaN, Infinity
// const numToPrecision = 0.00123;
// console.log((1234.5).toFixed(2)); //1234.50
// console.log((1234.5).toPrecision(2)); //1.2e+3

// console.log(numToPrecision.toFixed(2)); //0.00
// console.log(numToPrecision.toPrecision(5)); //0.0012300

//-gr .toString vs .valueOf
const custom = {
	num: 100,
	valueOf() {
		return this.num + 1;
	},
	toString() {
		return this.num + 2000;
	},
};

// console.log(custom); //whole object with content
// console.log(+custom); // 101
// alert(custom); //2100 - toString
// alert(+custom); //101 - valueOf
