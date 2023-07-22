console.log("-----------Set---------------");
//? Set - is an object of the values that are unique and numbers as its keys. like an object kinda array.
const set = new Set([
	1,
	2,
	2,
	2,
	3,
	4,
	4,
	"five",
	() => {
		console.log("in Set fn");
	},
]);
console.log(set); // {1, 2, 3, 4, 'five', ()=>{...}}
set.add(6).add(5).add(7).add(6);
console.log(set);
console.log("values", set.values());
console.log("keys", set.keys());
console.log("entries", set.entries()); //  {1 => 1, 2 => 2, 3 => 3, 4 => 4, 'five' => 'five', …}

//? map from set.
//? Set has its key and values mostly to have an opportunity to transfer it into map
// const map = new Map();

// for (const i of set) {
// 	map.set(i, i);
// }
// map.set("two", 2);
// for (const [key, value] of map.entries()) {
// 	console.log(key, value);
// }

export default () => {};
