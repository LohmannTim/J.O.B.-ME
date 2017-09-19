myApp.service('PrepService', ['$http', function ($http) {
    console.log('Prep Service loaded');

    var self = this;
    self.taskManager = {
        list: []
    };
    self.prep = {
        list: []
    }
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
    self.updateActivityTracker = function() {
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

    self.companies = {
        list: []
    };

    self.getGlassdoor = function() {
        console.log('getting glassdoor');
        $http({
            method: 'GET',
            url: '/plan/glassdoor'
        }).then(function(response){
            console.log('received companies', response.data.response.employers);
            self.companies.list = response.data.response.employers;
        });
    };

    self.getGlassdoor();

    }])