//? Keys may only be of type object in WeekMap
//-y only has: get, set, delete, has methods
//? it cleans memory, if the key(which is object) of some value was deleted. As there is no possibility to get and use this value anymore.(Map doesn't clean data these way...
// but you still couldn't use that kinda values without keys)

console.log("-----------WeakMap---------------");
let user = { name: "Sasha" };
let otherUser = { name: "Vasya" };

const weakMap = new WeakMap([
	[user, "user data"],
	[otherUser, "other user data"],
]);

console.log("user:", weakMap.get(user)); // 'user data'
user = null;
console.log("user:", weakMap.get(user)); //undefined
console.log("has user:", weakMap.has(user)); //false
otherUser = null;
console.log("weakMap:", weakMap); // { <items unknown> }
//
//
const cache = new WeakMap();

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}
	cache.get(user);
}

const david = { name: "David" };
const jodie = { name: "Jodie" };
cacheUser(david);

console.log(cache.has(david));
console.log(cache.has(jodie));
//
//
console.log("-----------WeakSet---------------");
const users = [{ name: "David" }, { name: "Jodie" }, { name: "Balu" }];

const weakSet = new WeakSet();
weakSet.add(users[0]).add(users[1]);
console.log(weakSet.has(users[1]));
users.splice(1, 1);
console.log(weakSet.has(users[1]));

console.log("");
export default () => {};
