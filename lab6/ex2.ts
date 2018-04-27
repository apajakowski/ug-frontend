/*
function sayHello(person) {

	console.log('hello ' + person.name)
}

let ziutek = { name: 'ziutek' }

sayHello(ziutek)
*/
/*
//brak kontroli typow
function sayHello(person) {

	console.log('hello ' + person.name)
}

let ziutek = { imie: 'ziutek' }

sayHello(ziutek)
//hello undefined 
*/
//interfejs oczekujemy od person name typu string 
/*
interface Person {
	name: string;

}
function sayHello(person: Person) {

	console.log('hello ' + person.name)
}
//obiekt ziutek 
let ziutek = { name: 'ziutek', yob: 1967 }

sayHello(ziutek)
*/
interface Person {
	name: string;
	yob: number;
	pesel?: number; //opcjonalne  
}

class Student {
	constructor(public name: string, public yob: number) {
		this.name = name;
		this.yob = yob;
	}
}

function sayHello(person: Person) {
	console.log('hello ' + person.name)
}

let zenek = new Student('zenon',2006)
console.log(zenek.name)
//obiekt ziutek 
let ziutek = { name: 'ziutek', yob: 1967 }

let myList: Person[] = [ziutek, zenek];
let myTuple: [string, number] = ["fiat", 1998]

console.log(myTuple[0])
sayHello(ziutek)
sayHello(zenek)

enum Color { Red, Green, Blue }
console.log(Color.Red)

let smthing: any = 5;
smthing = "hello"
smthing = false
//przejdzie

/*
let smthing = 5;
smthing = "hello"
smthing = false
//nieprzejdzie 
*/
	