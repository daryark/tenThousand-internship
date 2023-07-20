import chalk from "chalk";
import { testDataChaos } from "./testDataChaos.mjs";
import { useCustomError } from "../console/deleteError.mjs";

export function testSomeFunction(callback) {
	for (const argument of testDataChaos) {
		try {
			console.log(`argument:`, chalk.underline(argument), callback(argument));
		} catch (error) {
			// console.log(chalk.bgRed("Error Name, Message:"), error.name, error.message);

			useCustomError(error);
		}
	}
}
