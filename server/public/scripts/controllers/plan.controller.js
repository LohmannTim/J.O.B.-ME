myApp.controller('PlanController', function (PlanService) {
        console.log('Plan Controller loaded');
        var self = this; 
        self.userAnswer = PlanService.userAnswer;
        self.userResponse = PlanService.plan; //pulls self.plan in to controller
        self.addAnswer = function (){//passing in the object created on plan1.html
        PlanService.addAnswer();
        self.PlanService.glassdoor();
}});