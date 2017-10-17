myApp.controller('PlanController', ['PlanService', 'UserService', function (PlanService, UserService) {
        console.log('Plan Controller loaded');
        var self = this;
        UserService.getuser();
        self.location = PlanService.location;
        self.userObject = UserService.userObject;
        self.userAnswer = PlanService.userAnswer;
        self.userResponse = PlanService.plan; //pulls self.plan in to controller
        self.addAnswer = function () { //passing in the object created on plan1.html
                PlanService.addAnswer();
        };
        self.openPicker = function () {
                console.log('Script loaded');
                var fsClient = filestack.init('A82q3O0tkSouW7Mmg3Gouz');

                function openPicker() {
                        console.log('openPicker run');
                        fsClient.pick({
                                fromSources: ["local_file_system", "imagesearch", "facebook", "instagram", "dropbox"]
                        }).then(function (response) {
                                // declare this function to handle response
                                //handleFilestack(response);
                                console.log(response);
                                PlanService.putResume(self.userObject.user_id, response.filesUploaded[0].url);
                        });
                }
                openPicker();
        };
}]);