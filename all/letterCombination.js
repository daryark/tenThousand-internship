const letterCombinations = function (digits) {
	digits = digits.split("");

	return iterateDigit(digits);
};

function iterateDigit(digits, args = { current: "", i: 0 }) {
	const alphabet = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
	};

	const { current, i } = args;

	if (digits.length === 1) return alphabet[digits[0]];

	return alphabet[digits[i]].reduce((acc, el) => {
		if (digits[i + 1]) {
			const res = iterateDigit(digits, { current: current + el, i: i + 1 });
			acc = [...acc, ...res]; //compose all combinations together, res - one next row
		} else {
			acc = [...acc, current + el]; //compose three combinations
		}
		return acc;
	}, []);
}

console.log(letterCombinations("234"));

//refactor: solve this task with only for and while and no methods.
//!!!!!!!!!!!!!!!!!!!!!!
