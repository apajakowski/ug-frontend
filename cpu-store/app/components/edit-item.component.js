/*
* Komponent odpowiada za edycją produktów oraz dodawanie nowych
*/

(function(){

    'use strict';

    angular
        .module('app')
        .component('editItemComponent', component());

    function component(){

        //zależności naszego komponentu:
        //itemsService - potrzebujemy tego serwisu aby zapisać zmiany w produkcie/dodać nowy produkt
        //$routeParams - serwis wbudowany w angular, przekazuje parametry w adresie strony
        //$location - serwis wbudowany w angular, pozwala manipulować adresem strony
        controller.$inject = ['itemsService', '$routeParams', '$location'];

        function controller(itemsService, $routeParams, $location){
            var vm = this;

            //funkcja wywołana gdy komponent się załaduje
            vm.$onInit = function(){
                //sprawdzamy czy jesteśmy w trybie edycji czy dodawania produktu
                //jeśli w adresie mamy parametr id, to wiemy, że edytujemy produkt
                //jeśli tego parametru nie ma, to znaczy, że dodajemy nowy produkt
                vm.item = $routeParams.id 
                    ? itemsService.get($routeParams.id) //jeśli edytujemy produkt, to musimy go pobrać z serwisu
                    : {}; 

                //ustawiamy tytuł strony
                vm.title = $routeParams.id
                    ? "Edit item"
                    : "Add new item";

                //tworzymy sobie obiekt 'roboczy', dzięki temu będziemy mogli np. cofnąć zmiany
                vm.model = Object.assign({}, vm.item);

                //deklarujemy możliwe opcje producentów
                vm.manufacturers = ['AMD', 'Intel'];
            }

            //funkcja zapisu zmian
            vm.save = function(){
                //treści komunikatów
                vm.saveError = null;
                vm.saveSuccess = null;
                
                //sprawdzamy czy edytujemy czy dodajemy nowy produkt
                var updating = vm.model.id != null;

                //jeśli formularz nie zawiera błędów...
                if (vm.form.$valid){
                    var items = itemsService.getAll();

                    //sprawdzamy czy przypadkiem produkt o takiej nazwie już istnieje
                    if (items.find(function(item){
                        var id = vm.model.id || 0;
                        return item.id != id &&
                            item.name.toLowerCase() == vm.model.name.toLowerCase();
                    }) != null){
                        vm.saveError = "CPU with this name already exists";
                        return;
                    }

                    //wywołujemy odpowiednią funkcję w serwisie, zależnie od tego czy edytujemy czy dodajemy
                    if (vm.model.id){
                        itemsService.update(vm.model);
                    }
                    else {
                        vm.model.id = itemsService.add(vm.model);
                    }

                    //czyścimy formularz
                    vm.item = Object.assign({}, vm.model);
                    vm.form.$setPristine();
                    vm.form.$setUntouched();

                    //wyświetlamy komunikat
                    vm.saveSuccess = "CPU has been " + (updating ? "modified." : "added.");
                }
            }

            //cofnięcie zmian w produkcje
            vm.cancel = function(){
                //nadpisujemy nasz roboczy model oryginałem
                vm.model = Object.assign({}, vm.item);
                //czyścimy formularz
                vm.form.$setPristine();
                vm.form.$setUntouched();
            }

            //usuwanie produktu
            vm.delete = function(){
                //usuwamy z serwisu
                itemsService.remove(vm.item);
                //przekierowujemy użytkownika do strony głównej
                $location.path('/');
            }
        }

        return {
            controller: controller,
            templateUrl: '/app/templates/edit-item.component.html'
        }
    }

}());