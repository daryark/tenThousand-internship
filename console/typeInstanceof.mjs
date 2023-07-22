import { testDataChaos } from "../testData/testDataChaos.mjs";

console.log("-----------typeof---------------");
function dataType() {
	for (let i = 0; i < testDataChaos.length; i += 1) {
		console.log(typeof testDataChaos[i], testDataChaos[i]);
	}
}
dataType();
console.log("------------instanceof--------------");
function dataInstance(objectType) {
	for (let i = 0; i < testDataChaos.length; i += 1) {
		console.log(testDataChaos[i] instanceof objectType, testDataChaos[i]);
	}
}
// dataInstance(Date);
dataInstance(Object);

export default () => {};
