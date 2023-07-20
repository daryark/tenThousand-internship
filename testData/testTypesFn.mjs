import chalk from "chalk";
import { testDataChaos } from "./testDataChaos.mjs";

export function testSomeFunction(callback) {
	for (const argument of testDataChaos) {
		try {
			console.log(`argument:`, chalk.underline(argument), callback(argument));
		} catch (error) {
			console.log("Error Name:", error.name);
			console.log(chalk.bgRed("Error Message:"), error.message);
			console.log("Stack Trace:", error.stack);
		}
	}
}
