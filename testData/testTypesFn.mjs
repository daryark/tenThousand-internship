import chalk from "chalk";
import { testDataChaos } from "./testDataChaos.mjs";
import { CustomError, useCustomError } from "../console/deleteError.mjs";
import { testDeepObj } from "./testDeepObj.mjs";

//function - Number(value)
//method - value.includes('blabla')
//object.method - Math.floor('value');

//opt - optional data to pass into callback

export default function testSomeFunction(callback, type, opt) {
	if (!type) useCustomError({ message: "passed not valid arguments", name: TypeError.name });

	for (const argument of testDataChaos) {
		let result;
		try {
			switch (type) {
				case "function":
					result = callback(argument);
					break;

				case "method":
					result = argument.callback(opt.length > 0 ? opt : "");
					break;

				case "object.method":
					const { object, method } = callback;
					result = object[method](argument);
					break;

				// case "chain":
			}
			console.log(`arg:`, chalk.bgYellow(argument), result);
			return result;
		} catch (error) {
			console.log(argument, "error");
			useCustomError(error);
		}
	}
}

//err: How can i fix this to work as a chain of methods after return ?
// function transformChainMethods(callback) {
// 	const { object, method: chain } = callback;
// 	let result = object;
// 	console.log(chain.split("."));
// 	for (const m of chain.split(".")) {
// 		console.log(m, result);
// 		result[m];
// 	}
// 	console.log("result", result);
// 	console.log("result(arg)", result({}));
// }

// transformChainMethods({ object: Object, method: "prototype.toString.call" }, testDeepObj);

//-gr manual tests
// testSomeFunction(parseFloat); //passed not all arguments => error
// testSomeFunction(parseFloat, "function");
// testSomeFunction({ object: Math, method: "floor" }, "object.method");
// testSomeFunction(String, "function");
