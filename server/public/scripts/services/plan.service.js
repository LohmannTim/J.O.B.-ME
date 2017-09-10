myApp.service('PlanService', ['$http', function ($http) {
    console.log('Plan Service loaded');

    var self = this;
    self.plan = {
        list: []
    };
    self.getPlan =function() {
        $http.get('/plan').then(function (response){
            self.plan.list = response.data;
            console.log('get response', self.plan);
            
                console.log(response.data);
                
        })
    }
    }])