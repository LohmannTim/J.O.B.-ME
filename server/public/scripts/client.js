var myApp = angular.module('myApp', ['ngRoute']); //declares the variable.  calls in angular that we brought in through index.html ngroute is a dependency injection

//define client side routing
myApp.config(['$routeProvider', function ($routeProvider) { //angular route- client side routing
    console.log('route config loaded');
    $routeProvider
        .when('/', //when you hit '/' I want you to...
            {
                redirectTo: '/home'
            } //redirect when hit the '/'
        ).when('/prep1', { //this is defining everything we need
            templateUrl: 'views/prep1.html', //provides template- use this part of html
            controller: 'prepController', //calls the requested controller
            controllerAs: 'vm' //THIS IS THE WORM HOLE!!! vm means nothing, but is a parameter used to call client.js from index.html.  
        }).when('/plan1', {
            templateUrl: 'views/plan1.html', //see lines 9-12
            controller: 'planController',
            controllerAs: 'vm'
        }).when('/exec1', {
            templateUrl: 'views/exec1.html', //see lines 9-12
            controller: 'execController',
            controllerAs: 'vm'    
        }).otherwise({
            //catch-all
            redirectTo: 'home'
        });

}]);


console.log('myApp is loaded', myApp);