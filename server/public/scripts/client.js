var myApp = angular.module('myApp', ['ngRoute']); //declares the variable.  calls in angular that we brought in through index.html ngroute is a dependency injection

//define client side routing
myApp.config(function($routeProvider) { //angular route- client side routing
    console.log('route config loaded');
    $routeProvider
        .when('/home', {//when you hit '/' I want you to...
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        }).when('/plan1', {
            templateUrl: 'views/plan1.html', //see lines 9-12
            controller: 'PlanController',
            controllerAs: 'vm'
        }).when('/prep1',{
            templateUrl: 'views/prep1.html',
            controller: 'PrepController',
            controllerAs: 'vm'
        }).when('/exec1',{
            templateUrl: 'views/exec1.html',
            controller: 'ExecController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: 'home'
        });
                    //redirect when hit the '/'
        // ).when('/prep1', { //this is defining everything we need
        //     templateUrl: 'views/prep1.html', //provides template- use this part of html
        //     controller: 'PrepController', //calls the requested controller
        //     controllerAs: 'vm' //THIS IS THE WORM HOLE!!! vm means nothing, but is a parameter used to call client.js from index.html.  
    
        // }).when('/exec1', {
        //     templateUrl: 'views/exec1.html', //see lines 9-12
        //     controller: 'ExecController',
        //     controllerAs: 'vm'    
        // })//.otherwise({
        //     //catch-all
        //     //redirectTo: 'home'
        // //});

        });
