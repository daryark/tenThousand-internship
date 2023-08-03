const text = `Max received 2406.025 USDT.
Kate received 1900.5 USDT.
Andrey received 2550.28 USDT.
Before I confirmed first transaction platform deposit was 11750 USDT.
Than I send Money to charity 900 USDT and paid for flat 1600 USDT`;

function countBalance(str) {
	const zero = "0".charCodeAt();
	const nine = "9".charCodeAt();
	const dot = ".".charCodeAt();

	let myBalance = 0;
	let transactions = 0;
	let num = 0;
	let float = false;
	let floatPow = 0.1;

	for (let i = 0; i < str.length; i += 1) {
		const codeI = str[i].charCodeAt();

		if (codeI >= zero && codeI <= nine) {
			const digit = codeI - zero;

			if (!num) {
				num += digit;
			} else {
				if (float) {
					if (digit) {
						num = digit * floatPow + num;
					}
					floatPow *= 0.1;
					continue;
				} else {
					num = num * 10 + digit;
				}
			}
		} else if (dot === codeI && num) {
			float = true;
			continue;
		} else if (num) {
			if (num > myBalance) {
				if (myBalance) {
					transactions += myBalance;
				}
				myBalance = num;
			} else {
				transactions += num;
			}
			num = 0;
			float = false;
			floatPow = 0.1;
			continue;
		}
	}
	return myBalance - transactions;
}
// console.log(countBalance(text));
