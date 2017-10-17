myApp.controller('ExecController', //give myApp.controller the name of 'ExecController'
['ExecService', //array listing dependencies and the last item of the array calls it all up
    function (ExecService) {
        console.log('Exec Controller loaded');
        var self = this; //building an object to be displayed on the DOM 
        //self.exec = {};
        ExecService.getExec();
        self.exec = ExecService.exec;
        }
]);