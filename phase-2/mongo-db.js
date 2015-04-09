//load mongoose
var mongoose = require('mongoose');

//get a reference of Schema object
var Schema = mongoose.Schema;

//create a new schema of the type Employee
var Employee = new Schema({
    id: Number,
    job_titles: String,
    department: String,
    name: String,
    employee_annual_salary: String
});

//set the model Employee in mongoose
mongoose.model('Employee', Employee);

//start mongoose to connect to the mongodb database emp_db
mongoose.connect('mongodb://localhost/emp_db');
