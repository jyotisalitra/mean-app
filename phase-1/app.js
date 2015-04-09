//load express
var express = require('express');
var app = express();

//create static binding for this express app.
//all the files in public directory should be directly available from the browser
app.use(express.static('public'));

//start the server at localhost:3000 address
var server = app.listen(3000, function () {

    var host = server.address().address,
        port = server.address().port

    console.log('CSE5335Phase1 app listening at http://%s:%s', host, port);

});

//create a route for REST API for the app
app.get('/load', function (req, res) {

    //initialize data to be returned
    var data = [
        {
            "Title": "Nizza Pizza & Pasta",
            "Address": "1430 S Cooper St",
            "City": "Arlington",
            "State": "TX",
            "Phone": "(817) 274-5220",
            "Latitude": "32.721402",
            "Longitude": "-97.115082",
            "Rating": {
                "AverageRating": "3.5",
                "TotalRatings": "22",
                "TotalReviews": "22"
            }
        },
        {
            "Title": "Angelos Pizza, Steak and Spaghetti",
            "Address": "2590 W Pioneer Pkwy",
            "City": "Pantego",
            "State": "TX",
            "Phone": "(817) 303-7242",
            "Latitude": "32.709527",
            "Longitude": "-97.150673",
            "Rating": {
                "AverageRating": "5",
                "TotalRatings": "1",
                "TotalReviews": "1"
            }
        },
        {
            "Title": "Domino's Pizza",
            "Address": "2177 W Green Oaks Blvd",
            "City": "Arlington",
            "State": "TX",
            "Phone": "(817) 496-0333",
            "Latitude": "32.709222",
            "Longitude": "-97.190582",
            "Rating": {
                "AverageRating": "1",
                "TotalRatings": "1",
                "TotalReviews": "1"
            }
        },
        {
            "Title": "Papa John's Pizza",
            "Address": "2633 W Park Row Dr",
            "City": "Arlington",
            "State": "TX",
            "Phone": "(817) 801-7272",
            "Latitude": "32.721494",
            "Longitude": "-97.15136",
            "Rating": {
                "AverageRating": "3.5",
                "TotalRatings": "4",
                "TotalReviews": "4"
            }
        },
        {
            "Title": "Saljo Pizza",
            "Address": "2229 W Park Row Dr, #D",
            "City": "Pantego",
            "State": "TX",
            "Phone": "(817) 460-6082",
            "Latitude": "32.721444",
            "Longitude": "-97.144134",
            "Rating": {
                "AverageRating": "4.5",
                "TotalRatings": "11",
                "TotalReviews": "11"
            }
        },
        {
            "Title": "Little Caesars Pizza",
            "Address": "1110 S Bowen Rd",
            "City": "Arlington",
            "State": "TX",
            "Phone": "(817) 394-3939",
            "Latitude": "32.72421",
            "Longitude": "-97.149468",
            "Rating": {
                "AverageRating": "3.5",
                "TotalRatings": "12",
                "TotalReviews": "12"
            }
        },
        {
            "Title": "Chuck E Cheese's",
            "Address": "2216 S Fielder Rd",
            "City": "Arlington",
            "State": "TX",
            "Phone": "(817) 861-1561",
            "Latitude": "32.707143",
            "Longitude": "-97.132149",
            "Rating": {
                "AverageRating": "5",
                "TotalRatings": "2",
                "TotalReviews": "2"
            }
        },
        {
            "Title": "Vito's Pizza & Pasta",
            "Address": "2234 W Park Row Dr, Ste G",
            "City": "Pantego",
            "State": "TX",
            "Phone": "(817) 276-1800",
            "Latitude": "32.721177",
            "Longitude": "-97.143364",
            "Rating": {
                "AverageRating": "5",
                "TotalRatings": "3",
                "TotalReviews": "3"
            }
        }
    ];

    //return this data as JSON to the front-end
    res.json(data);
});