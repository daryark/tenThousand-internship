import { testDeepArr } from "../testData/testDeepArr.mjs";
import { testDeepObj } from "../testData/testDeepObj.mjs";

console.log("        spreadRestDestruct.mjs       ");

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
console.log("--------------------------");

//? desturcturization //?objects
const { name, stats } = testDeepObj;
// name = "Dasha"; // TypeError assignment to const
testDeepObj.name = "Artem";
console.log(`name: ${name}, testDeepObj.name: ${testDeepObj.name}`);

stats.likes = 201;
console.log(`stats.likes: ${stats.likes}, testDeepObj.stats.likes: ${testDeepObj.stats.likes}`);

// stats.shares = "haha, no stats.shares";
// console.log(`stats.shares: ${stats.shares}, testDeepObj.stats: ${testDeepObj.stats.shares}`);
console.log("--------------------------"); //?arrays
//
//
const {
	shares: { users },
} = stats;

const [anna, , marco, , , newUser = "Dasha"] = users;
console.log(`anna: ${anna}, marco: ${marco}, newUser: ${newUser}`);
//
//
export default () => {};
console.log(" ");
