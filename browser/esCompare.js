console.log(x); // No error, just undefined
var x = 10;

if (true) {
	var globalVar = "I'm globalVar";
}
console.log(globalVar); // accessible outside the IF scope

// console.log(y);// Reference Error, cannot access before initialization
// let y = 20;

export default () => {};
