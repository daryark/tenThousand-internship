//?Map - object with any type of keys and remember the order!
console.log("-----------Map---------------");
const map = new Map();
let inMapObj = { objKey: "objValue" };

map.set("BMW", "string key");
map.set(inMapObj, "obj key");
map.set({ objKey2: "objValue2" }, "obj key2"); //!both objects as keys exist as separate ones, even when they were the same inside
map.set(NaN, "nan key");
map.set(() => {}, "fn key");
map.set(4).set(9);
console.dir(map);
const iterator = map.entries();

console.log(iterator.next(), iterator.next(), iterator.next(), iterator.next());
console.log(map.delete(NaN));
console.log(map.has(NaN));
console.log("-------------map.entries-------------");
for (const entry of map.entries()) {
} //basic syntax
for (const [key, value] of map) {
	//also works - destruct, be default for...of takes entries method from map, so you can write without it
	console.log(key, value);
}
console.log("------------map.keys--------------");
for (const key of map.keys()) {
	console.log(key);
}
console.log("-----------when map transferred into regular array or object---------------");
const array = [...map];
const obj = Object.fromEntries(map.entries());
console.log(array);
console.log(obj);

console.log(typeof Object.keys(obj)[4], "👉", Object.keys(obj)[4]); // type string and '()=>{}' in it
console.log(typeof Object.keys(obj)[3], "👉", Object.keys(obj)[3]);
//! in map there were two pairs oj objects in keys and its values, here the first one were erased by the second one (as key become the same '[object Object]')
//!type string and '[object Object]' in it,
//!moreover, the order is whatever it wants to mix entries.
//
//
console.log("-------------map.forEach-------------");
map.forEach((key, value, map) => console.log(`key: ${key}, value: ${value}`));
//
//
console.log("------------clean obj or keys------------");
inMapObj = null; //the original object is now null

for (const key of map.keys()) {
	console.log(key); //?the key (with deleted object) still exists in this Map...until the full delete of the whole map.
}
map.clear();
console.log("map.size", map.size);

export default () => {};
console.log("");
