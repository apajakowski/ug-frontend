var doubles = [1, 2, 3].map( item => item * 2 );
// doubles.forEach(item => console.log(item));

var evens = [1, 2, 3, 4, 5, 6].filter(v => v % 2 === 0);
// evens.forEach(item => console.log(item));

var evenPredicate = v => v % 2 === 0;
var evensTwo = [1, 2, 3, 4, 5, 6].filter(evenPredicate);
// evensTwo.forEach(v => console.log(v));

var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move(){
        // var self = this; // var that = this; var _this = this;
        this.numbers = this.numbers.map(element => element * this.scale);
    }
};

aShape.move();
aShape.numbers.forEach(element => {
    console.log(element);
});