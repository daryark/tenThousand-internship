import { testDataChaos } from "./testDataChaos.mjs";
import { CustomError, useCustomError } from "../console/deleteError.mjs";
import { testDeepObj } from "./testDeepObj.mjs";

//function - Number(value)
//method - value.includes('blabla')
//object.method - Math.floor('value');

//opt - optional data to pass into fnName as an array!!! of options

export default function testSomeFunction(fnName, type, opt = "") {
	if (!type) useCustomError({ message: "passed not valid arguments", name: TypeError.name });

	for (const argument of testDataChaos) {
		let result;

		try {
			switch (type) {
				case "function":
					result = fnName(argument, ...opt);
					break;

				case "method":
					result = argument[fnName](...opt);
					break;

				case "object.method":
					const { object, method } = fnName;
					result = object[method](argument, ...opt);
					break;

				default:
					useCustomError({ message: "not valid case" });
					return;
				// case "chain":
			}
			console.log(`arg:`, argument, result);
			// return result;
		} catch (error) {
			console.log(argument, "error");
			useCustomError(error);
		}
	}
}

//err: How can i fix this to work as a chain of methods after return ?
// function transformChainMethods(fnName) {
// 	const { object, method: chain } = fnName;
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
