import testSomeFunction from "../testData/testSomeFunction.mjs";

// testSomeFunction("includes", "method", ["a"]);

//returns true/false whether the element was found
//has optional second param - startIndex, if not provided - start from 0, if startIndex negative - begin from end to start
//work with arrays or strings
//-------------------------------------------------------------
//in string search for first true result and returns
//in array search for strict equality with some element

String.prototype.myIncludes = function (searchElement = "", startIdx = 0) {
	let found = true;

	if (!searchElement) return !found;
	if (typeof startIdx !== "number") return found;
	startIdx = startIdx < 0 ? 0 : startIdx;

	let del = "";
	for (let i = startIdx; i < this.length; i += 1) {
		if (this[i] === searchElement[del.length]) {
			del += this[i];
			if (searchElement.length === del.length) {
				return found;
			}
		} else {
			del = "";
		}
	}
	return !found;
};

Array.prototype.myIncludes = function (searchElement = undefined, startIdx = 0) {
	let found = false;

	startIdx = startIdx < 0 ? this.length + startIdx : startIdx;

	for (let i = startIdx; i < this.length; i += 1) {
		if (this[i] === searchElement) {
			return (found = true);
		}
	}
	return found;
};

// console.log([1, 2, 3].myIncludes(2, -2));
// // console.log([, ,].myIncludes());
// console.log("my str".myIncludes("my", "kljkl")); //true
// console.log("my str".myIncludes("my", "2")); //true
// console.log("my str".myIncludes("my", 2)); //false
// console.log("my str".myIncludes("my")); //true
// console.log("my str".myIncludes("my", -2)); //true

// testSomeFunction("myIncludes", "method");
// testSomeFunction("myIncludes", "method", ["t"]);
