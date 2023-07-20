const obj = {
	myProp: "myProp value",
};

console.log(Object.keys(obj));
Object.defineProperty(obj, "myProp", {
	configurable: false,
});
Object.defineProperty(obj, "newProp", {
	value: "new Prop value",
	writable: true,
	// writable: false,
	// configurable: true,
	configurable: false,
});
console.log(
	Object.keys(obj),
	"myProp still seen after configurable: false, but new Prop is not seen, though configurable: true"
);
obj.newProp = "new value";
console.log(obj.newProp);

// console.log(delete obj.newProp); //TypeError

//fix: try with super obj on proto then:
// ReferenceError
// Thrown if object is super.

export default () => {};
console.log(" ");