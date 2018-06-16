/*
* Komponent wyświetlający listę produktów
*/

(function(){
    'use strict';

    //dodajemy komponent do aplikacji
    angular
        .module('app')
        .component('itemsListComponent', component());

    //definicja komponentu
    function component(){

        //kontroler komponentu potrzebuje serwisu '$location' 
        //$location to serwis wbudowany w angular, pozwala manipulować adresem strony 
        //wykorzystamy go do przekierowania użytkownika do strony edycji produktu
        controller.$inject = ['$location'];

        function controller($location){
            var vm = this;

            //funkcja wywołana przy kliknięciu na kartę produktu
            vm.navigateTo = function(item){
                //przekierowujemy użytkownika na stronę edycji poprzez zmianę adresu
                //schemat adresu będzie teraz wyglądał tak: "www.naszsklep.com/edit/1" 
                //co pasuje do schematu routingu, który konfigurowaliśmy w pliku app.js
                //dzięki temu moduł 'ngRoute' przekieruje nas do komponentu 'EditItemComponent'
                $location.path('/edit/' + item.id); 
            }
        }

        return {
            controller: controller,
            templateUrl: '/app/templates/items-list.component.html',
            //bingins - definicja właściwości komponentu, które możemy ustawić dynamicznie podczas działania aplikacji
            bindings: {
                items: '<' //tu będą przekazywane produkty dynamicznie wyfiltrowane
            }
        }
    }
}());