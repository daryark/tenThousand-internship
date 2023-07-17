//?Generator functions
export function* gen(n = 4) {
	console.log("gen cl, 'from generatorFn..mjs'");
	for (let i = 1; i <= n; i += 1) {
		yield i;
	}
}

//instead of all console.logs for generator.next() , , ,
export function nextFn(instance) {
	let now = false;
	do {
		now = instance.next();
		console.log(now);
	} while (!now.done);
}

const g = gen(2);
nextFn(g);
