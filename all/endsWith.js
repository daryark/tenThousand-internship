function confirmEnding(str, target) {
	let nFromEnd = 1;

	for (let i = str.length - 1; i >= 0; i -= 1) {
		const iTarget = target[target.length - nFromEnd];

		if (iTarget === str[i]) {
			nFromEnd += 1;
			continue;
		}
		console.log(target.length, nFromEnd - 1);
		return target.length === nFromEnd - 1;
	}
}

console.log(confirmEnding("Bastian", "an"));
console.log(
	confirmEnding(
		"Walking on water and developing software from a specification are easy if both are frozen",
		"specification"
	)
);
