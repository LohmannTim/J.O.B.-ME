myApp.service('PrepService', ['$http', function ($http) {
    console.log('Prep Service loaded');

    var self = this;
    self.taskManager = {
        list: []
    };

    self.getPrep =function() {
        $http.get('/prep').then(function (response){
            self.prep.list = response.data;
            console.log('get response', self.prep);
            

        })
    };

    self.activityTracker = {
        list: []
    };

    self.getActivityTracker =function() {
        $http.get('/prep/activitytracker').then(function (response){
            self.prep.list = response.data;
            console.log('get response', self.prep);
            

        })
    };

    self.addToActivityTracker = function() {
        $http.put('/prep/activitytracker').then(function (response){
            self.prep.list =response.data;
            console.log('put response', self.prep);
            
        })
    }
    self.editActivityTracker = function() {
        $http.update('/prep/activitytracker').then(function (response){
            self.prep.list =response.data;
            console.log('update response', self.prep);
            
        })
    }
    self.deleteActivityTracker = function() {
        $http.delete('/prep/activitytracker').then(function (response){
            self.prep.list =response.data;
            console.log('destroy response', self.prep);
            
        })
    }

    }])