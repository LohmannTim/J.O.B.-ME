myApp.service('HomeService', ['$http', function ($http) {
    console.log('Home Service loaded');

    var self = this;
    self.home = {
        list: []
    };
    self.getHome =function() {
        $http.get('/home').then(function (response){
            console.log(response.data);
            self.home.list = response.data;
            console.log('get response', self.home);
            

        })
    }
    }])