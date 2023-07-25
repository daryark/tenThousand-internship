console.log(e("        generator&Iterator.mjs       "));

//?generator functions
export function* gen(n = 4) {
	console.log("gen cl, 'from generatorFn..mjs'");
	for (let i = 1; i <= n; i += 1) {
		yield i;
	}
}

//function instead of all console.logs for gen.next() , , ,
export function nextFn(instance) {
	let now = false;
	do {
		now = instance.next();
		console.log(now);
	} while (!now.done);
}

const g = gen(2);
nextFn(g);

//?iterations for...in, for...of

const arr = ["a", "b"];
export function objForOf() {
	for (let key in arr) {
		console.log(typeof key, key);
	}
	console.log("☝ keys from arr, with for...in:", arr);
}

objForOf();

//
//
//? custom generator - [Symbol.iterator]
function toIterable(obj) {
	console.log(" toIterable function ");
	return {
		...obj,
		[Symbol.iterator]() {
			const keys = Object.keys(this);
			let max = keys.length;
			let counter = 0;
			const $this = this; //$ is just to make another name; need to remember the context to be able to get it in next(){}

			return {
				next() {
					if (counter < max) {
						const result = {
							value: $this[keys[counter]],
							done: false,
						};
						counter += 1;

						return result;
						//or you can write all this with one line:
						//-y return {value: $this[keys[counter++]], done: false}
						//- means that counter will be incremented after returning the result.
					}
					return { value: undefined, done: true };
				},
			};
		},
	};
}

const objWithCustomIterator = {
	name: "my object",
	about: "very cool object",
	dateOfBirth: new Date("2023-07-17"),
};

for (let value of toIterable(objWithCustomIterator)) {
	console.log(value);
}
//
//

export default () => {};
console.log("");
