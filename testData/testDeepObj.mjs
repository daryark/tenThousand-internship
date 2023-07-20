export const testDeepObj = {
	name: "Cristopher",
	stats: {
		likes: 200,
		dislikes: 0,
		shares: {
			users: ["Anna", "Maria", "Marco", "Fred", "Pete"],
			quantity: 5,
		},
	},

	logContext() {
		console.log("this", this);
	},
};
