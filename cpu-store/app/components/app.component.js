/*
* Główny komponent aplikacji - nasza 'strona główna', 
* zarządza komunikacją pomiędzy komponentem filtrowania (SearchComponent) 
* i komponentem listy produktów (ItemsListComponent)
*/

(function(){
    'use strict';

    //dodajemy komponent do aplikacji
    angular
        .module('app')
        .component('appComponent', component());

    //definicja komponentu
    function component(){

        //kontroler naszego komponentu nie ma żadnych zależności
        controller.$inject = [];

        function controller(){

            //konwencja, aby kod był czytelniejszy oraz unikanie nadużywania słowa kluczowego 'this'
            var vm = this; 

            //funkcja wywoływana gdy nasz komponent się załaduje
            vm.$onInit = function(){
                //inicjalizujemy listę produktów pustą tablicą, 
                //nie jest to konieczne, ale dobrą praktyką jest inicjalizacja podczas definiowania zmiennych
                vm.items = []; 
            }

            //callback - funkcja wywoływana gdy parametry filtra (w komponencie SearchComponent) się zmienią
            vm.onSearch = function(items){
                //uaktualniamy listę produktów
                vm.items = items;
            }
        }

        return {
            controller: controller,
            templateUrl: './app/templates/app.component.html',
        }
    }
}());