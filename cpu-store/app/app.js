/*
* Plik wejściowy aplikacji. Inicjalizacja, deklaracja modułów, konfiguracja routingu
*/

(function(){

    //inicjalizujemy aplikację i deklarujemy używane moduły (ngRoute i ui.bootstrap)
    var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

    //funkcja konfigurująca routing
    routeConfig.$inject = ['$routeProvider']; //$routeProvider odpowiada za obsługę routingu w aplikacji
    function routeConfig($routeProvider){
        
        $routeProvider.caseInsensitiveMatch = true; //ustawiamy true, aby adres aplikacji nie zależał od wielkości liter

        $routeProvider
        //ścieżka do głównej strony
        .when('/', {
            template: '<app-component></app-component>'
        })
        //ścieżka do edycji, :id to nazwa parametru po którym wyszukamy produkt, znak zapytania wskazuje, że parametr jest opcjonalny
        .when('/edit/:id?', {
            template: '<edit-item-component></edit-item-component>'
        })
        //każdy adres nie pasujący do żadnego z powyższych przekierowujemy do strony głównej (dzięki temu nie wystąpi błąd 404)
        .otherwise({
            redirectTo: '/'
        })
    };

    //przekazujemy funkcję konfigurującą routing do naszej aplikacji
    app.config(routeConfig); 
}());