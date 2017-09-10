myApp.service('ExecService', ['$http', function ($http) {
    console.log('Exec Service loaded');

    var self = this;
    self.exec = {
        list: []
    };
    self.getExec =function() {
        $http.get('/exec').then(function (response){
            console.log(response.data);
            self.exec.list = response.data;
            console.log('get response', self.exec);
            

        })
    }
    }])