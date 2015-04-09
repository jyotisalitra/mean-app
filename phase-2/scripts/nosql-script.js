//load mongodb config
require('../mongo-db.js');

//load mongoose
var mongoose = require('mongoose');

//using mongoose, load Employee model
var Employee = mongoose.model('Employee');

//query to find an employee using its ID
Employee.find({id: 1}, function ( err, emp ){
    if(err)
    {
        console.log(err);
    }
    console.log('###QUERY-- Select a single record using its primary key id=1');
    console.log(emp[0]);
});


//query to find some employees who are in POLICE department
Employee.find({department: 'POLICE'}, function ( err, emp ){
    if(err) {
        console.log(err);
    }
    console.log(' ');
    console.log('###QUERY-- Select a subset of records where department="POLICE"');

    //showing only 10 records as there are thousands of such employees
    for(var i=0; i<10; i++)
    {
        console.log(emp[i]);
    }
});