myApp.controller('PrepController', function (PrepService) {
        console.log('Prep Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.prep = {};
        PrepService.getPrep();
        self.prep = PrepService.prep;
        }
]);