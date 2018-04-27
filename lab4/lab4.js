const {add} = require('./zadanie2'); // Destrukturyzacja, wyciagajaca funkcje add do zmiennej z obiektu ktory zwraca modul ES6

class SimplyMath { // Klasa w ES6
	constructor(a, b) { //konstruktor
		this.a = a;
		this.b = b;
		this.counter = 0;

		this.objectCounter = () => { // Arrow function zwana tez lambda ES6
			this.counter++;
			console.log(this.counter);
		};
    }
	
	sayHello() { 
		console.log(`Podales a jako: ${this.a} oraz b jako: ${this.b}`); // Template strings ES6
	}
	
	simpleAdd () {
		console.log(add(this.a, this.b));
	}
}

const arrayOfNumber = [5, 6];

const m = new SimplyMath(...arrayOfNumber); // spread operator - nie przekazuje jako tablica tylko jako rozpakowane jej elementy

m.sayHello();
m.simpleAdd();
m.objectCounter();