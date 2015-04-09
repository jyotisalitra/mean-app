(function(){

    var map, chart;

    //creating a angular module for the app
    angular.module('myApp', []);

    //attaching a controller on this module
    angular.module('myApp').controller('HomeCtrl', ['$http', HomeController]);

    //define the HomeController
    function HomeController($http) {
        //alias
        var hc = this;

        //create an empty restaurant list
        hc.restaurants = [];

        //function to load data from the backend
        hc.loadData = function () {
            $http({
                method:"GET",
                url: "/load",
                cache: false
            }).success(function(data, status, headers, config) {
                //once loaded, set the result of the request to restaurant array
                hc.restaurants = data;
                //set markers on the map
                setMarkers(hc.restaurants);
                //draw Google Chart
                drawChart(hc.restaurants);
            }).error(function(error, status, headers, config) {
                console.dir(error);
            });
        };
    }


    //google map

    //initialize map with default options
    function initMap() {
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(32.705, -97.122778)
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

    //sets markers on the Google Map with the info available in points object
    function setMarkers (points) {

        //make Google Map auto-scale to cover all points
        var bounds = new google.maps.LatLngBounds();

        //loop over points to set a marker for each one
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            //convert latitude and longitude of this point to google LatLng object
            var latLng = new google.maps.LatLng(point.Latitude, point.Longitude);

            //include this point to the bound
            bounds.extend(latLng);

            //set the marker at this LatLng on Google Map
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: 'images/pizzaria.png',
                title: point.Title
            });
        }

        //center Google Map to the center of the bound
        map.setCenter(bounds.getCenter());

        map.fitBounds(bounds);

    }

    //initialize Google Map on the window.load event
    google.maps.event.addDomListener(window, 'load', initMap);

    //chart
    //load Google Chart API
    google.load("visualization", "1", {packages:["corechart"]});

    //set Google Chart callback
    google.setOnLoadCallback(initChart);

    //define Google Chart callback
    function initChart() {
        //load PieChart of the type: donutchart
        chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    }

    //include information from points object to the piechart
    function drawChart(points) {

        //initialize a Google DataTable object
        var data = new google.visualization.DataTable();

        //add two columns
        data.addColumn('string', 'Restaurant');
        data.addColumn('number', 'Ratings');


        var rows = [];

        //add rows to the data
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            rows.push([point.Title, parseInt(point.Rating.TotalRatings)]);
        }

        data.addRows(rows);

        //set options for the chart
        var options = {
            title: 'Restaurant Reviews',
            pieHole: 0.4
        };

        //draw this chart
        chart.draw(data, options);
    }

})();