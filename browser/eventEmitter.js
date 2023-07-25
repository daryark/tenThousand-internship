//-y usecases:
//node.js: -робота з файловою системою, відстеження подій, таких як завершення читання або запису файлу
// реагування на події - завершення асинхронної операції, втрата з'єднання
// react-бібліотеки використовують EventEmitter для сповіщення компоненту про зміну стану та реагування

class EventEmitter {
	#listeners = {
		// eventName: [callback, callback]
	};

	#get(eventName) {
		return this.#listeners[eventName] ?? [];
	}

	#set(eventName, listeners) {
		if (!listeners.length) {
			delete this.#listeners[eventName];
		} else {
			this.#listeners[eventName] = listeners;
		}
	}

	subscribe(eventName, callback) {
		const subscriptions = this.#get(eventName);
		subscriptions.push(callback);

		this.#set(eventName, subscriptions);

		return () => this.unsubscribe(eventName, callback);
	}

	unsubscribe(eventName, callback) {
		const subscriptions = this.#get(eventName).filter((i) => i !== callback);

		this.#set(eventName, subscriptions);
	}

	run(eventName, data) {
		//kinda dispatch/ make action for all callbacks, that are subscribed to this event
		this.#get(eventName).forEach((callback) => callback(data));
	}
}

const eventEmitter = new EventEmitter();

eventEmitter.subscribe("on", () => {
	console.log("Light in office on");
});

eventEmitter.subscribe("on", () => {
	console.log("Computer is on");
});

const coffee = eventEmitter.subscribe("on", () => {
	console.log("Coffee machine is on");
});

eventEmitter.run("on");
console.log("------------------------");
coffee();

eventEmitter.run("on");
