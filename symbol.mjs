import chalk from "chalk";

//Symbol is unique value always!
//even if the inside value of Symbol is the same. Used in objects, mostly in initial JS methods under core.
const sym = Symbol("foo");

console.log("typeof sym: ", chalk.yellow(typeof sym)); //symbol,  NOT STRING
console.log("typeof sym: ", chalk.green(typeof sym.description)); // string (foo)

//
//
const sym1 = Symbol.for("dog"); //check if exists this name ? write the link to existing one : create new symbol with such name prop
const sym2 = Symbol.for("dog");
console.log('Symbol.for("dog") sym1 === sym2: ', chalk.green(sym1 === sym2)); //true

const sym3 = Symbol("dog"); //new symbol (even if this name exists, but still unique symbol, with new id under core)
const sym4 = Symbol("dog"); //new symbol
console.log('Symbol("dog") sym3 === sym4: ', chalk.red(sym3 === sym4)); //false

//
//
const symbolProp = Symbol("myProp");
const user = {
	name: "Alex",
	age: 45,
	id: "1",
	[symbolProp]: "some symbol",
};

const idSymbol = Symbol("id");
user[idSymbol] = "1234 5678 9000 0001";

//but Symbols won't show up if we look for object properties 👇
//they will show up only with get symbols
console.log("Object.getOwnPropertyNames(user)", Object.getOwnPropertyNames(user));
console.log("Object.getOwnPropertySymbols(user)", Object.getOwnPropertySymbols(user));

//
//
//cteate custom iterator for object - for its key: prop pairs
// const iterator = {
//   [Symbol.iterator](){

//   }
// }
const us = ["a", "b"];
export function objForOf() {
	for (let key in us) {
		console.log(typeof key, key);
	}
}

objForOf();

// function Range(start, end) {
// 	var ret = {};
// 	ret[Symbol.iterator] = function* () {
// 		while (start < end) yield start++;
// 	};
// 	return ret;
// }

// function logger() {
// 	for (var x of Range(1, 4)) {
// 		console.log(x);
// 	}
// }

// logger();
