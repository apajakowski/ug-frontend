/*
* serwis odpowiedzialny za dostęp do produktów, w rzeczywistej aplikacji komunikowałby się z backendem przez api http
*/

(function(){
    'use strict';

    //dodajemy serwis do aplikacji
    angular
        .module('app')
        .service('itemsService', service);

    //serwis nie ma żadnych zależności, bo nie komunikuje się z backendem
    service.$inject = [];
    function service(){

        //zwraca wszystkie produkty
        this.getAll = function(){
            return items;
        }

        //wyszukuje produkt po id 
        this.get = function(id){
            return items.find(function(item){
                return item.id == id;
            })
        }
        
        //aktualizuje produkt po edycji
        this.update = function(model){
            //wyszukujemy oryginał..
            var source = items.find(function(item){
                return item.id == model.id;
            });

            //i uaktualniamy jego pola
            if (source){
                angular.forEach(Object.keys(source), function(key){
                    source[key] = model[key];
                })
            }
        }

        //dodaje nowy produkt i nadaje mu id
        this.add = function(model){
            
            //najpierw pobieramy wszystkie id produktów
            var ids = items.map(function(item){
                return item.id;
            });

            //teraz generujemy nowe id 
            var id = Math.max.apply(Math, ids) + 1;

            //nadajemy id naszemu nowemu produktowi
            model.id = id;

            //dodajemy produkt do kolekcji
            items.push(model);
            return id;
        }

        //usuwa produkt
        this.remove = function(item){
            var idx = items.indexOf(item);
            items.splice(idx, 1);
        }

        //kolekcja produktów w sklepie zaimplementowana jako zwyczajna tablica jednowymiarowa, 
        //zainicjalizowana przykładowymi obiektami
        var items = [
            {
                id: 1,
                name: 'Core i3',
                manufacturer: 'Intel',
                cores: 2,
                clockRate: 2000,
                gpuModel: 'Model1',
                gpuRate: 1500,
                price: 2000
            },
            {
                id: 2,
                name: 'Xeon',
                manufacturer: 'Intel',
                cores: 4,
                clockRate: 2000,
                gpuModel: 'Model2',
                gpuRate: 1000,
                price: 5000
            },
            {
                id: 3,
                name: 'Athlon',
                manufacturer: 'AMD',
                cores: 4,
                clockRate: 2200,
                gpuModel: 'Model1',
                gpuRate: 1200,
                price: 1200
            },
            {
                id: 4,
                name: 'Core i5',
                manufacturer: 'Intel',
                cores: 4,
                clockRate: 2000,
                gpuModel: 'Model1',
                gpuRate: 800,
                price: 2100
            },
            {
                id: 5,
                name: 'Duron',
                manufacturer: 'AMD',
                cores: 2,
                clockRate: 2000,
                gpuModel: 'Model3',
                gpuRate: 1100,
                price: 1100
            },
            {
                id: 6,
                name: 'Celeron',
                manufacturer: 'Intel',
                cores: 1,
                clockRate: 2000,
                gpuModel: 'Model1',
                gpuRate: 1500,
                price: 2000
            },
            {
                id: 7,
                name: 'Pentium',
                manufacturer: 'Intel',
                cores: 4,
                clockRate: 2000,
                gpuModel: 'Model2',
                gpuRate: 700,
                price: 5000
            },
            {
                id: 8,
                name: 'Ryzen',
                manufacturer: 'AMD',
                cores: 4,
                clockRate: 2200,
                gpuModel: 'Model1',
                gpuRate: 900,
                price: 1200
            },
            {
                id: 9,
                name: 'Core i7',
                manufacturer: 'Intel',
                cores: 4,
                clockRate: 2000,
                gpuModel: 'Model1',
                gpuRate: 640,
                price: 2100
            },
            {
                id: 10,
                name: 'Sempron',
                manufacturer: 'AMD',
                cores: 2,
                clockRate: 2000,
                gpuModel: 'Model3',
                gpuRate: 1100,
                price: 1100
            },
        ]
    }
}());