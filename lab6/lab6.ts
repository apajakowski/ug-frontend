class Cpu {

    manufacturer: string;
    numCores: number;
    clockRate: number;
    gpuModel: string;
    gpuRate: number;
    price: number;

    constructor(){
        this.manufacturer = '';
        this.numCores = 0;
        this.clockRate = 0;
        this.gpuModel = '';
        this.gpuRate = 0;
        this.price = 0;
    }

    getManufacturer(){
        return this.manufacturer;
    }
    setManufacturer(value){
        this.manufacturer = value;
    }
    getNumCores() {
        return this.numCores;
    }
    setNumCores(value) {
        this.numCores = value;
    }
    getClockRate() {
        return this.clockRate;
    }
    setClockRate(value) {
        this.clockRate = value;
    }
    getGpuModel() {
        return this.gpuModel;
    }
    setGpuModel(value) {
        this.gpuModel = value;
    }
    getGpuRate() {
        return this.gpuRate;
    }
    setGpuRate(value) {
        this.gpuRate = value;
    }
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value;
    }
}
    
let cpu  = new Cpu();
cpu.setManufacturer('intel');

class QuantumCpu extends Cpu {

    isQuantum: boolean;

    constructor(){
        super();
        this.isQuantum = true;
    }

    getIsQuantum(){
        return this.isQuantum;
    }

    getPrice(){
        return super.getPrice() * 2;
    }
}

let quantum = new QuantumCpu();
quantum.setPrice(5);
console.log(quantum.getPrice());