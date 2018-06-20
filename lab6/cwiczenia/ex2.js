var Student = /** @class */ (function () {
    function Student(name, yob) {
        this.name = name;
        this.yob = yob;
        this.name = name;
        this.yob = yob;
    }
    return Student;
}());
function sayHello(person) {
    console.log('hello ' + person.name);
}
var zenek = new Student('zenon', 2006);
console.log(zenek.name);
//obiekt ziutek 
var ziutek = { name: 'ziutek', yob: 1967 };
var myList = [ziutek, zenek];
var myTuple = ["fiat", 1998];
console.log(myTuple[0]);
sayHello(ziutek);
sayHello(zenek);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
var smthing = 5;
smthing = "hello";
smthing = false;
