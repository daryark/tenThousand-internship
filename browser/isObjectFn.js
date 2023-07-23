import { testDataChaos } from "../testData/testDataChaos.mjs";
import { testDeepObj } from "../testData/testDeepObj.mjs";

function isObject(arg) {
	console.log(Object.prototype.toString.call(arg) === "[object Object]");
}
isObject(testDeepObj);

//-y interesting examples:
// console.log(Object.prototype.toString.call(testDataChaos[14])); // [object Null]
// console.log(Object.prototype.toString.call(testDataChaos[16])); // [object RegExp]
// console.log(Object.prototype.toString.call(testDataChaos[17])); // [object Array]
// console.log(Object.prototype.toString.call(testDataChaos[22])); // [object Object ]
// console.log(Object.prototype.toString.call(testDataChaos[24])); // [object Date]
// console.log(Object.prototype.toString.call(testDataChaos[25])); // [object Function]
// console.log(Object.prototype.toString.call(testDataChaos[14])); // [object Null]
// console.log(testDataChaos[28] instanceof SomeClass); // true, so the class is an object and you can only find whether it is an instance of some particular class, but its overall type is Object
