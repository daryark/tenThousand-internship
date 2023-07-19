import { testDeepArr } from "./testDeepArr.mjs";
import { testDeepObj } from "./testDeepObj.mjs";

class SomeClass {} //fix - write class

export const testData = [
	1,
	"string",
	"123parseString",
	"with space string",
	"123 with space and nums",
	" spaces in start&end ",
	"",
	" ",
	24691357802469135780n,
	BigInt(1234567890n),
	3.25,
	true,
	false,
	NaN,
	Infinity,
	-Infinity,
	null,
	/pattern/,
	new Error("This is an error."),
	["apple", "banana", "cherry"],
	[1, 2, 3, 4, 5],
	[
		testFn(),
		function () {
			console.log("fn in arr of fn");
		},
	],
	testDeepArr,
	testDeepObj,
	[{ name: "John", age: 30 }, , , { name: "John", age: 31 }],
	new Date(),
	Symbol("mySymbol"),
	function () {
		console.log("This is a function.");
	},
	class MyClass {},
	new SomeClass(),
	new Map(),
	new WeakMap(),
	new Set(),
	new WeakSet(),
	testFn(),
	testData,
	,
];

export function testTypesFn(callback, testData = testData) {
	for (const arg of testData) {
		callback(arg);
	}
}
