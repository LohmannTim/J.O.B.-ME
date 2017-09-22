myApp.service('PrepService', ['$http', function ($http) {
    console.log('Prep Service loaded');


    var self = this;
    self.taskManager = {
        list: []
    };
    self.companies = {
        list: []
    };
    self.activity = {}
    self.prep = {
        list: []
    }
    self.activityTracker = {
        list: []
    };
    
    self.getPrep = function () {
        $http.get('/prep').then(function (response) {
            self.prep.list = response.data;
            console.log('get response', self.prep);


        })
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

    self.location = '';
    self.companyLocation = function () {
        console.log('service post hit with:', self.location);
        $http({
            method: 'GET',
            url: '/plan/glassdoor',
            data: self.location
        }).then(function (response) {
            console.log('sent location', response);
            self.location();

        });

    }


    self.getGlassdoor = function () {
        console.log(location);
        console.log('getting glassdoor');
        $http({
            method: 'GET',
            url: '/plan/glassdoor',
            params: {
                location: ''
            }
        }).then(function (response) {
            console.log('received companies', response.data.response.employers);
            self.companies.list = response.data.response.employers;
        });
    };
    self.getCompanies = function (location) {
        console.log('service post hit with: ', self.companies);
        $http({
            method: 'POST',
            url: '/prep/glassdoor',
            data: {
                location: location
            }
        }).then(function (response) {
            console.log('companies on prep service data', response.data.response.employers);

            self.companies.list = response.data.response.employers;
            //         console.log('get response', self.activityTracker.list);


            //     })
            // };
            //self.getCompanies();
        });
    };


    //self.getGlassdoor();

}])