myApp.controller('HomeController', //give myApp.controller the name of 'ListingController'
['HomeService', //array listing dependencies and the last item of the array calls it all up
    function (HomeService) {
        console.log('Home Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.exec = {};
        HomeService.getHome();
        self.home = HomeService.exec;
        }
]);