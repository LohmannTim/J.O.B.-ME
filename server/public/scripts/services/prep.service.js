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
    }
    }])