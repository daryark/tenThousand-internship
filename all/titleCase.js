//charcodes of capital letters lower the complimentary charcodes of stroke letters on 32

function titleCase(str) {
	const A = "A".charCodeAt();
	const Z = "Z".charCodeAt();
	let res = "";

	for (let i = 0; i < str.length; i += 1) {
		const el = str[i].charCodeAt();
		const prevEl = res[res.length - 1];

		if (i === 0 || prevEl === " ") {
			res += !(el >= A && el <= Z) ? String.fromCharCode(el - 32) : str[i];
		} else {
			res += el >= A && el <= Z ? String.fromCharCode(el + 32) : str[i];
		}
	}
	return res;
}

console.log(titleCase("sHoRt AnD sToUt"));
