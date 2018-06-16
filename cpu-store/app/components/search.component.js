/*
* Komponent wyszukiwania, odpowiada za filtrowanie produktów wyświetlanych w sklepie
* i zgłaszanie tego do komponentu AppComponent, który z kolei aktualizuje listę produktów 
* w komponencie ItemsListComponent
*/
(function(){
    'use strict';

    //dodajemy komponent do aplikacji
    angular
        .module('app')
        .component('searchComponent', component());

    //definicja komponentu
    function component(){

        //komponent zależny jest od serwisu produktów
        controller.$inject = ['itemsService'];

        function controller(itemsService){
            var vm = this;

            //funkcja wywołana gdy komponent się załaduje
            vm.$onInit = function(){
                //pobieramy sobie wszystkie nazwy aby móc je wyświetlać w polu wyszukiwania
                vm.cpuNames = itemsService.getAll().map(function(item){
                    return item.name;
                }).sort();

                //nasz model filtru
                vm.model = {};

                //uaktualniamy listę produktów, w tym przypadku po prostu będzie to lista wszystkich
                vm.filterChanged();
            }

            //funkcja wywoływana gdy parametry filtru się zmienią
            vm.filterChanged = function(){
                //tworzymy lokalną kopię listy produktów
                var items = angular.copy(itemsService.getAll());

                // filtrujemy po nazwie
                if (vm.model.name){
                    items = items.filter(function(item){
                        return item.name.toLowerCase().indexOf(vm.model.name.toLowerCase()) > -1 
                    });
                }    

                //filtrujemy po producencie
                if (vm.model.manufacturer) {
                    items = items.filter(function(item){
                        return item.manufacturer.toLowerCase() == vm.model.manufacturer.toLowerCase();
                    })
                }

                //filtrujemy po ilości rdzeni
                if (vm.model.cores) {
                    items = items.filter(function(item){
                        return item.cores == vm.model.cores;
                    })
                }

                //itd...
                if (vm.model.clockRate) {
                    items = items.filter(function(item){
                        return item.clockRate == vm.model.clockRate;
                    })
                }

                if (vm.model.gpuModel){
                    items = items.filter(function(item){
                        return item.gpuModel.toLowerCase().indexOf(vm.model.gpuModel.toLowerCase()) > -1;
                    })
                }

                if (vm.model.gpuRate){
                    items = items.filter(function(item){
                        return item.gpuRate == vm.model.gpuRate;
                    })
                }

                vm.items = items;

                //wywołujemy callback w komponencie AppComponent
                vm.onSearch()(items);
            }

            //funkcja wywoływana gdy klikniemy w nazwę na liście pod polem wyszukiwania
            vm.onSelected = function(name){
                vm.model.name = name;
                vm.filterChanged();
            }
        }

        return {
            controller: controller,
            templateUrl: '/app/templates/search.component.html',
            bindings: {
                onSearch: '&' //definicja callbacku gdy filtr się zmieni
            }
        }
    }
}());