(function () {

    //creating a angular module for the app
    angular.module('myApp', []);

    //attaching a controller on this module
    angular.module('myApp').controller('HomeCtrl', ['$http', HomeController]);

    //define the HomeController
    function HomeController($http) {
        //alias
        var hc = this;

        //create a log array to show logs on the UI.
        hc.log = [];

        //create an empty restaurant list
        hc.result = null;

        //function to load data from the backend
        hc.loadData = function () {
            hc.log = [];
            hc.log.push('Sending GET request to data.cityofchicago.org');

            //send request to get data from the web service
            $http({
                method: "GET",
                url: "https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=12000"
            }).success(function (data, status, headers, config) {

                hc.log.push('Response received from data.cityofchicago.org');

                //once loaded, set the result of the request to result
                hc.result = data;

                hc.log.push('Sending GET request to node.js server to store data in DB');

                //load data in databases by sending a POST request to the node.js server
                $http({
                    method: "POST",
                    url: "/loadDataInDB",
                    data: hc.result
                }).success(function (data, status, headers, config) {

                    //data has been sent to the node.js server
                    hc.log.push('Data stored in DB');
                    hc.log.push('Complete');

                }).error(function (error, status, headers, config) {
                    //log error
                    console.dir(error, status);
                    hc.log.push('Error: ' + status);
                });

            }).error(function (error, status, headers, config) {
                //log error
                console.dir(error);
                hc.log.push('Error: ' + status);
            });
        };
    }
})();