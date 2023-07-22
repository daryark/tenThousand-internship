import chalk from "chalk";
import { testDataChaos } from "./testDataChaos.mjs";
import { CustomError, useCustomError } from "../console/deleteError.mjs";

//constructor - Number(value)
//method - value.includes('blabla')
//constructor.method - Math.floor('value');

//opt - optional data to pass into callback

export default function testSomeFunction(callback, type, opt) {
	if (!type) useCustomError({ message: "passed not valid arguments", name: TypeError.name });

	for (const argument of testDataChaos) {
		try {
			switch (type) {
				case "function":
					console.log(`arg:`, chalk.bgYellow(argument), callback(argument));
					break;

				case "method":
					console.log(
						`arg:`,
						chalk.bgYellow(argument),
						argument.callback(opt.length > 0 ? opt : "")
					);
					break;

				case "object.method":
					const { object, method } = callback;
					console.log(`arg:`, chalk.bgYellow(argument), object[method](argument));

					break;
			}
		} catch (error) {
			console.log(argument, "error");
			useCustomError(error);
		}
	}
}

// testSomeFunction(parseFloat); //passed not all arguments => error
// testSomeFunction(parseFloat, "function");
// testSomeFunction({ object: Math, method: "floor" }, "object.method");
// testSomeFunction(String, "function");
