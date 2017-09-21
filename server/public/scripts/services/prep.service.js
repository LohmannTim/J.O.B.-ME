myApp.service('PrepService', ['$http', function ($http) {
    console.log('Prep Service loaded');


    var self = this;
    self.taskManager = {
        list: []
    };
    self.activity = {}
    self.prep = {
        list: []
    }
    self.getPrep = function () {
        $http.get('/prep').then(function (response) {
            self.prep.list = response.data;
            console.log('get response', self.prep);


        })
    };

    self.activityTracker = {
        list: []
    };

    self.getActivityTracker = function () {
        $http.get('/prep/activitytracker').then(function (response) {
            console.log(response.data);

            self.activityTracker.list = response.data;
            console.log('get response', self.activityTracker.list);


        })
    };

    self.addToActivityTracker = function (activity) {
        console.log('service post hit with: ', self.addToActivityTracker);
        $http({
            method: 'POST',
            url: 'prep/activitytracker',
            data: activity
        }).then(function (response) {
            console.log('sent data', response);
            self.getActivityTracker();
        })
    }
    self.updateActivityTracker = function () {
        $http.put('/prep/activitytracker').then(function (response) {
            self.prep.list = response.data;
            console.log('update response', self.prep);

        })
    }
    self.deleteActivityTracker = function () {
        $http.delete('/prep/activitytracker').then(function (response) {
            self.prep.list = response.data;
            console.log('destroy response', self.prep);

        })
    }

    

}])