"use strict";

var doubles = [1, 2, 3].map(function (item) {
    return item * 2;
});
// doubles.forEach(item => console.log(item));

var evens = [1, 2, 3, 4, 5, 6].filter(function (v) {
    return v % 2 === 0;
});
// evens.forEach(item => console.log(item));

var evenPredicate = function evenPredicate(v) {
    return v % 2 === 0;
};
var evensTwo = [1, 2, 3, 4, 5, 6].filter(evenPredicate);
// evensTwo.forEach(v => console.log(v));

var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move: function move() {
        var _this = this;

        // var self = this; // var that = this; var _this = this;
        this.numbers = this.numbers.map(function (element) {
            return element * _this.scale;
        });
    }
};

aShape.move();
aShape.numbers.forEach(function (element) {
    console.log(element);
});
