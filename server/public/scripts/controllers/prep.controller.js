myApp.controller('PrepController', function (PrepService) {
        console.log('Prep Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.prep = {};
        PrepService.getPrep();
        PrepService.getActivityTracker();
        self.prep = PrepService.prep;
        self.companies = PrepService.companies;
        self.addActivity = function(activity){
                PrepService.addToActivityTracker(activity);
        };
        self.activities = PrepService.activityTracker.list; 
        self.activity = PrepService.activity;
        // self.PrepService.addActivity();
        // PlanService.addActivity();
        // self.PlanService.glassdoor();
        }
        
);