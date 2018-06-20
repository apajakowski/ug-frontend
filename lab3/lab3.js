var Cpu = require('./lab2.js');

var superCpu = Object.create(new Cpu(), {
    isSuperCpu: {
        value: function() {
            return true;
        }
    },
    getPrice: {
        value: function() {
            var basePrice = Object.getPrototypeOf(this).getPrice.call(this);
            return basePrice * 2;
        }
    }
});

superCpu.setManufacurer("Intel");
superCpu.setPrice(100);

console.log(superCpu.getManufacturer());
console.log(superCpu.isSuperCpu());
console.log(superCpu.getPrice());