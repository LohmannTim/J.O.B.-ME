myApp.service('PlanService', ['$http', function($http) {
    console.log('Plan Service loaded');

     var self = this;
     self.userAnswer = {};

     self.getTricks = function() {
        console.log('getting tricks');
        $http({
            method: 'GET',
            url: '/plan'
        }).then(function(response){
            console.log('received tricks', response.data);
        });
    };

    self.getTricks();

    

    self.plan = {
        list: [],
        item: {}
    };
    self.getPlan =function() {
        $http.get('/plan/qanda').then(function (response){//send my request to qanda via plan
            self.plan.list = response.data;
            console.log('get response', self.plan);
            var dummyList = response.data;
            var numOfDummyList = dummyList.length;

            self.plan.item = response.data[numOfDummyList -1];

                console.log(response.data);
                
        })
    };


    self.addAnswer = function() {
        console.log('service post hit with: ', self.userAnswer);
        $http({
            method: 'POST',
            url: '/plan/qanda', 
            data: self.userAnswer
        }).then(function(response){
            console.log('sent data', response);
            self.getPlan();
        });
    };

    self.
    }]);