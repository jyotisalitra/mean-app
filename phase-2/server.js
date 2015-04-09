//load mongo-db config
require('./mongo-db.js');

//load express
var express = require('express');

//load bodyParser as we require our app to accept JSON request
var bodyParser = require('body-parser');

//load mongoose
var mongoose = require('mongoose');

//load mysql
var mysql      = require('mysql');

//load Employee model from mongoose
var Employee = mongoose.model('Employee');

//init the express app
var app = express();

//create static binding for this express app.
//all the files in public directory should be directly available from the browser
app.use(express.static('public'));

//enable JSON request handling with max limit of ~ 5MB
app.use(bodyParser.json({
    "limit": '5000kb'
}));

//start the server at localhost:3000 address
var server = app.listen(3000, function () {

    var host = server.address().address,
        port = server.address().port;

    console.log('CSE5335Phase2 app listening at http://%s:%s', host, port);

});


//create a route for REST API for the app
app.post('/loadDataInDB', function (req, res) {

    //truncate employee table to remove old rows
    Employee.remove({}, function (err) {
        if(err){
            console.log(err);
        }
    });

    //load data in mongodb
    for (var i = 0; i < req.body.length; i++) {
        var emp = req.body[i];

        //create new model object Employee and save it to the database
        new Employee({
            id: i+1,
            job_titles: emp.job_titles,
            department: emp.department,
            name: emp.name,
            employee_annual_salary: emp.employee_annual_salary
        }).save(function (err) {
                if(err){
                    console.log(err);
                }
            });
    }


    //store in mysql

    //create a mysql connection using config and auth settings
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'emp_db'
    });

    //start mysql connection
    connection.connect();

    //truncate employee table to remove old rows
    var query = connection.query('TRUNCATE employee', function(err, result) {
        if(err) console.log(err);
    });

    //load data in mongodb
    for (var i = 0; i < req.body.length; i++) {
        var emp = req.body[i];
            emp.id = (i+1);
        var query = connection.query('INSERT INTO employee SET ?', emp, function(err, result) {
            if(err) console.log(err);
        });
    }

    //close the mysql connection
    connection.end();

    //send success to the front-end caller
    res.sendStatus(200);
});