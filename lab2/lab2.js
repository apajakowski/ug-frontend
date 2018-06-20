var Cpu = (function() {

    function Cpu() {
        var manufacturer;
        var numCores;
        var clockRate;
        var gpuModel;
        var gpuRate;
        var price;

        return {
            getManufacturer: function() {
                return manufacturer;
            },
            setManufacurer: function(value) {
                manufacturer = value;
            },
            getNumCores: function() {
                return numCores;
            },
            setNumCores: function(value) {
                numCores = value;
            },
            getClockRate: function() {
                return clockRate;
            },
            setClockRate: function(value) {
                clockRate = value;
            },
            getGpuModel: function() {
                return gpuModel;
            },
            setGpuModel: function(value) {
                gpuModel = value;
            },
            getGpuRate: function() {
                return gpuRate;
            },
            setGpuRate: function(value) {
                gpuRate = value;
            },
            getPrice: function() {
                return price;
            },
            setPrice: function(value) {
                price = value;
            }
        }
    }

    return Cpu;
}());

module.exports = Cpu;