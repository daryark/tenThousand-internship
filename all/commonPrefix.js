const strs = ["flow", "florist", "reflow"];
const strs2 = ["flower", "flower", "flower", "flower"];
const strs3 = ["race-car", "rambler", "racoon"];

const longestCommonPrefix = function (strs) {
	let common = "";
	let currCommon = "";

	if (strs.length === 1) return strs[0];

	for (let i = 0; i < strs.length - 1; i += 1) {
		const curr = strs[i];
		const next = strs[i + 1];

		for (let j = 0; j < curr.length; j += 1) {
			if (curr[j] === next[j]) {
				currCommon += curr[j];
			} else {
				break;
			}
		}
		common =
			i > 0
				? common.length && common.length > currCommon.length
					? currCommon
					: common
				: currCommon;
		currCommon = "";
	}
	return common;
};

console.log("res", longestCommonPrefix(strs));
console.log("res", longestCommonPrefix(strs2));
console.log("res", longestCommonPrefix(strs3));
