myApp.controller('PlanController', function (PlanService) {
        console.log('Plan Controller loaded');
        var self = this; 
        self.userAnswer = PlanService.userAnswer;
        self.userResponse = PlanService.plan; //pulls self.plan in to controller
        self.addAnswer = function (){//passing in the object created on plan1.html
        PlanService.addAnswer();
        };
        
                var giphyAPIKey = '';   // your API Key
            
                self.getGiphs = function() {
                    // example request:
                    // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
                    var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
                    baseUrl += 'api_key=' + giphyAPIKey;    // api key
                    baseUrl += '&limit=10';  // limit
                    baseUrl += '&rating=r'; // rating
                    baseUrl += '&q=' + self.giphTag.tag;
            
                    console.log('baseUrl: ', baseUrl);
                    
                    $http.get(baseUrl).then(function(response) {
                        self.randomGif = response.data.data;
                        console.log('employer finder ', response.data);
                        
                    });
                };
            
             //self.getGiphs();
            

});