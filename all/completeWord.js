//створити програму, яка перевіряє, чи можна сформувати заданий рядок S з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.Умова в тому, що символи в P1 і P2 мають бути в тому самому порядку, що й у S.Інтерв’юер наводить вам наступний приклад:'radency' можна сформувати за допомогою 'rdnc’ та 'aey':
//  S:  r a d e n c y   = radency
// P1:  r    d    n c      = rdnc
// P2:    a    e       y   = aey
// Початковий код:

const cutFirst = (p) => p.slice(1);

const stringChecker = (s, p1, p2) => {
	const initialState = { p1, p2 };
	let choice = false;

	for (let i = 0; i < s.length; i += 1) {
		if (p1[0] === s[i] && p2[0] === s[i]) {
			if (!choice) {
				p1 = cutFirst(p1);
			} else {
				p2 = cutFirst(p2);
			}
			choice = !choice;
		} else if (p1[0] === s[i]) {
			p1 = cutFirst(p1);
		} else if (p2[0] === s[i]) {
			p2 = cutFirst(p2);
		} else {
			if (choice) {
				p1 = initialState.p1;
				p2 = initialState.p2;
				i = -1;
			} else {
				return false;
			}
		}
	}
	return !p1.length && !p2.length;
};

console.log(stringChecker("currency", "crrnc", "uey"));
console.log(stringChecker("w27y7", "27", "w7y"));
