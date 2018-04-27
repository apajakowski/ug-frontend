var Math = require('./zadanie1')(); // Przypisanie modu³u do zmiennej math
Math.calculateFieldOfCircle = function (r) { // Modul math zostaje rozszerzony o funkcje obliczajaca pole kola
	return Math.pi * (r*r);
};

module.exports = Math; // Eksport rozszerzonego modulu