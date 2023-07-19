import { testDeepArr } from "../testData/testDeepArr.mjs";
import chalk from "chalk";

console.log(chalk.inverse("        spreadRestDestruct.mjs       "));

//refactor: res outside the func is ok? not ok?/ do it as a class /object with method/ just take into scope {} ...?
let res = [];

function deepFlatCustom(arr) {
	if (!Array.isArray(arr)) {
		res = [...res, arr];
	} else {
		for (let i of arr) {
			deepFlatCustom(i);
		}
	}
	return res;
}

console.log(deepFlatCustom(testDeepArr));

//? desturcturization

//
//
export default () => {};
console.log(" ");
