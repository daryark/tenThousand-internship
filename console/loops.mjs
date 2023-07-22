import chalk from "chalk";

console.log(chalk.inverse("        loops.mjs       "));

function loopFor() {
	for (
		let i = 0, j = "s", y = 3, k = 5, m = "do-nothing";
		// i < 3 && y < 100; //-gr as usual, AND
		i < 3, y < 100; //-y ','like OR, when at least one is true
		i += 1, j += "j", y *= i, k %= y
	) {
		console.log(i, j, y, k, m);
	}
}
loopFor();
console.log("--------------------------");

let i = 10;
while (i > 5) {
	console.log(i);
	i -= 1;
}
console.log("--------------------------");
let j = 1;
do {
	console.log(j);
	j += j;
} while (j < 20);
console.log("--------------------------");
const num = 9;
switch (num) {
	case 1:
		console.log("one");
		break;

	case (2, 3, 4, 5, 6, 7, 8, 9):
		console.log("up to ten");
		break;

	default:
		console.log("10 or more");
		break;
}

export default () => {};
console.log("");
