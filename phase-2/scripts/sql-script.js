//load mysql
var mysql      = require('mysql');

//cretae MySQL connection by passing config and auth settings
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'emp_db'
});

//start MySQL connection
connection.connect();

//query to find an employee using its ID
connection.query('SELECT * FROM employee WHERE id=1',function(err,rows)     {

    if(err) {
        console.log("Error Selecting : %s ",err );
    }
    console.log('###QUERY-- Select a single record using its primary key id=1');
    console.log(rows);
});

//query to find some employees who are in POLICE department
connection.query('SELECT * FROM employee WHERE department="POLICE"',function(err,rows)     {

    if(err) {
        console.log("Error Selecting : %s ",err );
    }

    console.log(' ');
    console.log('###QUERY-- Select a subset of records where department="POLICE"');

    //showing only 10 records as there are thousands of such employees
    for(var i=0; i<10; i++)
    {
        console.log(rows[i]);
    }
});

//close the connection to MySQL
connection.end();

