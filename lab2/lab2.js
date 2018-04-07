//Lab 2
//Stworz moduł z interfejsem publicznym dla dziedziny procesory
var ProcessorModule = {};

ProcessorModule = (function(){
    "use strict";
    var ProcessorInterface = {
        models : ["Core i9-7900X", "Core i9-7920X", "Core i9-7940X", "Core i9-7960X", "Core i9-7980XE",
        "Core i9-8950HK", "Core i7-7820X", "FX-4100", "FX-4120", "FX-4130", "FX-4150", "FX-4170", "FX-6100", "FX-6120"],
        companies : ["Intel", "AMD"],
        manageModels : function(operation, model) {
            if (operation.localeCompare("add")){
                ProcessorInterface.models.push(model);
            } else if (operation.localeCompare("remove")) {
                var index = ProcessorInterface.models.indexOf(model);
                ProcessorInterface.models.splice(index, 1);
            }
            ProcessorInterface.models.sort();
        },
        listModels: function () {
            return ProcessorInterface.models.join(", ");
        },
        listCompanies: function () {
            return ProcessorInterface.companies.join(", ");
        },
    };
    return ProcessorInterface;
})();

ProcessorModule.manageModels("add", "Core i9-8950HK");
ProcessorModule.manageModels("remove", "FX-6120");
console.log(ProcessorModule.listCompanies() + "\n");
console.log(ProcessorModule.listModels() + "\n");