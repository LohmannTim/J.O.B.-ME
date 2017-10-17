myApp.controller('PrepController', function (PrepService) {
        console.log('Prep Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.prep = {};
        self.companies = PrepService.companies;
        self.activityTracker = PrepService.activityTracker;//for each data set make similar...
        
        PrepService.getPrep();
        PrepService.getActivityTracker();
        self.prep = PrepService.prep;
        self.addActivity = function(activity){
                PrepService.addToActivityTracker(activity);
        };
        self.activities = PrepService.activityTracker.list; 
        self.activity = PrepService.activity;
        self.getCompanies = function (){
                PrepService.getCompanies(self.location);
                self.companies = PrepService.companies;
                console.log('companies on controlller, ', self.companies)
                
        }
        // self.PrepService.addActivity();
        // PlanService.addActivity();
        // self.PlanService.glassdoor();
        
        
});