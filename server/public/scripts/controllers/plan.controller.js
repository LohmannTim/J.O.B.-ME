myApp.controller('PlanController', function (PlanService, UserService) {
        console.log('Plan Controller loaded');
        var self = this; 
        UserService.getuser();
        self.location = PlanService.location;
        self.userObject = UserService.userObject;        
        self.userAnswer = PlanService.userAnswer;
        self.userResponse = PlanService.plan; //pulls self.plan in to controller
        self.addAnswer = function (){//passing in the object created on plan1.html
        PlanService.addAnswer();
       
        
}});