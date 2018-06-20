var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cpu = /** @class */ (function () {
    function Cpu() {
        this.manufacturer = '';
        this.numCores = 0;
        this.clockRate = 0;
        this.gpuModel = '';
        this.gpuRate = 0;
        this.price = 0;
    }
    Cpu.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    Cpu.prototype.setManufacturer = function (value) {
        this.manufacturer = value;
    };
    Cpu.prototype.getNumCores = function () {
        return this.numCores;
    };
    Cpu.prototype.setNumCores = function (value) {
        this.numCores = value;
    };
    Cpu.prototype.getClockRate = function () {
        return this.clockRate;
    };
    Cpu.prototype.setClockRate = function (value) {
        this.clockRate = value;
    };
    Cpu.prototype.getGpuModel = function () {
        return this.gpuModel;
    };
    Cpu.prototype.setGpuModel = function (value) {
        this.gpuModel = value;
    };
    Cpu.prototype.getGpuRate = function () {
        return this.gpuRate;
    };
    Cpu.prototype.setGpuRate = function (value) {
        this.gpuRate = value;
    };
    Cpu.prototype.getPrice = function () {
        return this.price;
    };
    Cpu.prototype.setPrice = function (value) {
        this.price = value;
    };
    return Cpu;
}());
var cpu = new Cpu();
cpu.setManufacturer('intel');
var QuantumCpu = /** @class */ (function (_super) {
    __extends(QuantumCpu, _super);
    function QuantumCpu() {
        var _this = _super.call(this) || this;
        _this.isQuantum = true;
        return _this;
    }
    QuantumCpu.prototype.getIsQuantum = function () {
        return this.isQuantum;
    };
    QuantumCpu.prototype.getPrice = function () {
        return _super.prototype.getPrice.call(this) * 2;
    };
    return QuantumCpu;
}(Cpu));
var quantum = new QuantumCpu();
quantum.setPrice(5);
console.log(quantum.getPrice());
