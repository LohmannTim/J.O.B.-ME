myApp.controller('PlanController', //give myApp.controller the name of 'ListingController'
['PlanService', //array listing dependencies and the last item of the array calls it all up
    function (PlanService) {
        console.log('Plan Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.plan = {};
        PlanService.getPlan();
        self.plan = PlanService.plan;
        self.addPlan = function () {
        PlanService.addPlan(self.newPlan)
        }
    }
]);