import testSomeFunction from "../testData/testSomeFunction.mjs";

// testSomeFunction("split", "method");
//only strings can be splitted
//if pass nothing in split, it will split by words(if spaces), or by letters - if single word. So its the same is to pass '' or ' '
//if no corresponding delimiter find, so place all string on 0 index

String.prototype.mySplit = function (delimiter = "", limit = Infinity) {
	const result = [];
	let del = "";
	let sub = "";

	if (typeof this !== "string") throw new TypeError(`${this} is not a function`);
	if (!this.length) return [""];

	if (delimiter === "") {
		for (let i = 0; i < this.length; i += 1) {
			result.push(this[i]);
		}
		console.log(result);
		return result;
	}

	for (let i = 0; i < this.length; i += 1) {
		if (limit !== Infinity && result.length === limit) return result;

		if (this[i] === delimiter[del.length]) {
			if (del.length + 1 === delimiter.length) {
				if (sub) {
					result.push(sub);
					sub = "";
				} else if (delimiter.length === this.length) return ["", ""];
				del = "";
			} else {
				del += this[i];
			}
		} else {
			if (del) {
				sub += del;
				del = "";

				if (this[i] === delimiter[0]) {
					del += this[i];
				} else {
					sub += this[i];
				}
			} else {
				sub += this[i];
			}
		}
	}
	sub += del;
	result.push(sub);

	return result;
};

// "my string yoo yooyoyoo".mySplit("yoo");
// "my string".split("my string");
// console.log("4, 4, 4, 4".mySplit(", ", 2));
// console.log("with space string".mySplit("parse"));
// testSomeFunction("mySplit", "method", ["123parseMe"]);
