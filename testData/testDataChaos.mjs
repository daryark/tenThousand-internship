import { testDeepArr } from "./testDeepArr.mjs";
import { testDeepObj } from "./testDeepObj.mjs";

class SomeClass {
	constructor({ prop }) {
		this.prop = prop;
	}
}

export const testDataChaos = [
	1,
	3.25,
	"3.33",
	24691357802469135780n,
	BigInt(1234567890n),
	"123parseMe",
	"string",
	"with space string",
	"",
	" ",
	true,
	false,
	NaN,
	Infinity,
	-Infinity,
	null,
	undefined,
	/pattern/,
	["apple", "banana", "cherry"],
	[1, 2, 3, 4, 5],
	[1.25, 2.34],
	[
		function () {
			console.log("fn in arr");
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
	class Extended extends SomeClass {
		constructor({ prop, newProp }) {
			super(prop);
		}
	},
	new SomeClass({ prop: "new SomeClass" }),
	new Map(),
	new WeakMap(),
	new Set(),
	new WeakSet(),
	new Error("This is an error."),
	,
	,
];
