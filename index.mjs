// import "./console/symbol.mjs";
// import "./console/generator&Iterator.mjs";
// import "./console/operators.mjs";
import "./console/spreadRestDestruct.mjs";

//
//
//
//
//
// Синхронний код
// console.log("1. Синхронний код - початок");

// Генератор
// function* generatorExample() {
// 	yield console.log("2. Генератор - крок 1");
// 	yield console.log("2. Генератор - крок 2");
// }

// const gen = generatorExample();
// gen.next();
// gen.next();
// gen.next();

// setTimeout
// console.log("5. setTimeout500 - початок");
// setTimeout(() => {
// 	console.log("5. setTimeout - таймаут 500ms");
// }, 500);
// console.log("5. setTimeout500 - кінець");

// // Асинхронний виклик до API (приклад з setTimeout)
// console.log("3. setTimeout0 - початок");
// setTimeout(() => {
// 	console.log("3. setTimeout0 - таймаут");
// }, 0);
// console.log("3. setTimeout0 - кінець");

// // setImmediate
// console.log("4. setImmediate - початок");
// setImmediate(() => {
// 	console.log("4. setImmediate - зворотний виклик");
// });
// console.log("4. setImmediate - кінець");

// // process.nextTick
// console.log("6. process.nextTick - початок");
// process.nextTick(() => {
// 	console.log("6. process.nextTick - зворотний виклик");
// });
// console.log("6. process.nextTick - кінець");

// // queueMicrotask
// console.log("7. queueMicrotask - початок");
// queueMicrotask(() => {
// 	console.log("7. queueMicrotask - зворотний виклик");
// });
// console.log("7. queueMicrotask - кінець");

// // Promise
// console.log("8. Promise - початок");
// Promise.resolve().then(() => {
// 	console.log("8. Promise - зворотний виклик");
// });
// console.log("8. Promise - кінець");

// // setInterval
// let intervalCounter = 0;
// const intervalId = setInterval(() => {
// 	console.log(`9. setInterval - ітерація ${++intervalCounter}`);
// 	if (intervalCounter === 3) {
// 		clearInterval(intervalId);
// 		console.log("9. setInterval - кінець");
// 	}
// }, 1000);

// console.log("1. Синхронний код - кінець");
//
//
// //? Event loop

// function async1() {
// 	console.log("async1 start");
// 	async2().then(() => {
// 		console.log("async1 end");
// 	});
// }

// function async2() {
// 	return new Promise((resolve) => {
// 		resolve();
// 		console.log("async2");
// 	});
// }

// function* generate() {
// 	console.log("generate-1");
// 	yield;
// 	console.log("generate-1.2");
// }

// function* generate2() {
// 	console.log("generate-2");
// 	yield;
// 	console.log("generate-2.2");
// }

// console.log("script start");

// setTimeout(function () {
// 	console.log("setTimeout");
// }, 0);

// const generator1 = generate();
// generator1.next();
// generator1.next();

// async1();
