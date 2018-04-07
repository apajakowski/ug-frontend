//Lab 3
//Procesory - dziedziczenie

function Processor(name, processorSpeed, stepping){
    "use strict";
    this.name = name;
    this.processorSpeed = processorSpeed;
    this.stepping = stepping;
    this.models = {};
}

Processor.prototype = {
	
    showProperties: function (){
        "use strict";
        return "Nazwa procesora: " + this.name + ". Szybkość procesora: " + this.processorSpeed + ". Stepping: " + this.stepping + ".";
    },
	
    setModels: function (models){
        "use strict";
        this.models = models;
        return Object.keys(this.models).join(", ");
    },
	
    showScores: function(){
        "use strict";
        models = this.models;
        var sortable = [];
        for (var score in models) {
            sortable.push([score, " " + models[score]]);
        }
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });
        return sortable;
    }
};

function Procesory(name, processorSpeed, stepping, fastest, slowest){
    Processor.call(this, name, processorSpeed, stepping);
    this.fastest = fastest;
    this.slowest = slowest;
}

var models = ["Core i9-7900X":3109, "Core i9-7920X":2980, "Core i9-7940X":3080, "Core i9-7960X":3005, "Core i9-7980XE":2864, "Core i9-8950HK":3100, "Core i7-7820X":2849, "FX-4100", "FX-4120":2975, "FX-4130":2852, "FX-4150":2705, "FX-4170":3233, "FX-6100":2988, "FX-6120":3000];
var companies = ["Intel", "AMD"];

Procesory.prototype = Object.create(Processor.prototype);
Procesory.prototype.constructor = Procesory;

Procesory.prototype.showFastests = function(){
    var models = this.showScores();
    return models.slice(0, this.fastest);
};

Procesory.prototype.showSlowests = function(){
    var models = this.showScores();
    return models.slice(-this.slowest);
}

var PogrupowaneProcesory = new Procesory("Procesory", 3000, "B2", 3100, 2000);

console.log(PogrupowaneProcesory.showProperties());
console.log("Procesory alfabetycznie: " + PogrupowaneProcesory.setModels(models));
console.log("Szybkosc procesorow: " + PogrupowaneProcesory.showScores());
console.log("Najszybsze procesory: " + PogrupowaneProcesory.showFastests());
console.log("Najwolniejsze procesory" + PogrupowaneProcesory.showSlowests());