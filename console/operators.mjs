console.log("        mathOperations.mjs       ");

//
//
//? ^ (caret ) - take bites of numbers and change them, if 1^1=0 or 0^0=0; 1^0=1; 0^1=1;

//swap variables with no additional one example
let x = 10; //1001
let y = 5; // 0110
//-----------------------------10 ^ 5
x = x ^ y; //Output: 15 // 1001^ 0110 = 1111
console.log("x:", x, "y:", y);
//---------------------------  15 ^ 5
y = x ^ y; //Output: 10 // 1111^ 0110 = 1001
console.log("x:", x, "y:", y);
//----------------------------15 ^ 10
x = x ^ y; //Output: 5 // 1111^ 1001 = 0110
console.log("x:", x, "y:", y);
console.log("--------------------------");
//
//
//! be careful, | (bitwise 'or'), and if || (logical 'or')🙃
const FLAG_READ = 1; // 0001
const FLAG_WRITE = 2; // 0010

let permissions = 0; // Initialize with no permissions

// Setting permissions using bitwise OR
permissions = FLAG_READ | FLAG_WRITE; // 0001 | 0010 = 0011 (decimal 3)

// Checking if a particular flag is set using bitwise AND
if (permissions & FLAG_WRITE) {
	console.log("Write permission is granted.");
} else {
	console.log("Write permission is not granted.");
}
console.log("--------------------------");
//
//
//? ',' sign & post-increment/decrement
function nodeBrowserFn() {
	const arr = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	];

	for (var i = 0, j = 3; i <= 3; i++, j--) {
		console.log(`arr[${i}][${j}]=${arr[i][j]}`);
	}
}
nodeBrowserFn();
console.log("--------------------------");
//
//
console.log(true ?? "?? next");
console.log(false ?? "?? next");
console.log(undefined ?? "?? next");
console.log(null ?? "?? next");
console.log("--------------------------");
//
//
//! eval
const str = new String("2 + 2");
console.log(typeof str);

console.log(eval("2 + 2")); // 4
console.log(eval(str)); // obj with String: '2+2'
console.log(eval("2 + 2") === eval("4")); //true
console.log(eval("2 + 2") === eval(str)); //false
console.log("--------------------------");
//
//
export default () => {};
console.log("");
