myApp.service('PlanService', ['$http', function($http) {
    console.log('Plan Service loaded');

     var self = this;
     self.userAnswer = {};
    self.companies = {};
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
    self.location= '';
    self.companyLocation = function() {
        console.log('service post hit with:', self.location);
        $http({
            method: 'GET',
            url: '/plan/glassdoor',
            data: self.location
        }).then(function(response){
            console.log('sent location', response);
            self.location();
            
        });
        
    }
    self.companies = {
        list: []
    };

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
    self.getCompanies = function () {
        console.log('service post hit with: ', self.companies);
        $http({
            method: 'POST',
            url: '/plan/glassdoor',
            data: self.companies
        }).then(function (response) {
            console.log('sent data', response);
            self.getCompanies();
        });
    };


    self.getGlassdoor();
    }]);