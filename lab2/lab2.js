module.exports = function() { // Definicja modu³u
	return {
		pi: 3.14, // publiczny parametr
		add: function(a, b) { // publiczna funkcja dodaj
			return a+b;
		},
		minus: function(a, b) { // publiczna funkcja odejmij
			return a-b;
		}, 	
		multiple: function(a, b) { // publiczna funkcja pomnoz
			return a*b;
		}
	}
};