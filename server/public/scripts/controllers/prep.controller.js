myApp.controller('PrepController', //give myApp.controller the name of 'ListingController'
['PrepService', //array listing dependencies and the last item of the array calls it all up
    function (PrepService) {
        console.log('Prep Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.prep = {};
        PrepService.getPrep();
        self.prep = PrepService.prep;
        self.addPrep = function () {
        PrepService.addPrep(self.newPrep)
        }
    }
]);