MEAN-App Phase2
=======

###SQL: 
MySQL
###NoSQL: 
MongoDB
###Server: 
NodeJS + ExpressJS
###Client: 
AngularJS
###Others
mongoose, Bootstrap, Google Fonts

###Commands
1. Install Ubuntu Server in the Oracle VirtualBox.
    
2. Boot Ubuntu Server and install nodejs in Ubuntu using the following command:     
    `sudo apt-get update`  
    `sudo apt-get install nodejs`  
    `sudo apt-get install npm`

3. Install MongoDB and MySQL using following commands on the Ubuntu:    
    `sudo apt-get install mongodb`  
    `sudo apt-get install mysql`

4. Create a new directory for database files for mongodb:   
    `mkdir /data/db`
    `sudo chown $USER /data/db`

5. Create a table `employee` using following command in Ubuntu:     
    `mysql -u root -p root`     
    `mysql> CREATE SCHEMA emp_db;`  
    `mysql> USE emp_db;`    
    `mysql> CREATE TABLE employee (     
              id INT NOT NULL,  
              job_titles VARCHAR(128) NULL, 
              department VARCHAR(45) NULL,  
              name VARCHAR(128) NULL,   
              employee_annual_salary VARCHAR(45) NULL,  
              PRIMARY KEY (id));`   
    `mysql> exit;`  

6.  Run MongoDB server using following command on the Ubuntu terminal:  
    `mongod`

7. Open another terminal and go to the `phase-2` directory   
    `cd phase-2`

8. Initialize NodeJS app by installing dependencies from `package.json`:    
    `npm install`

9. Run NodeJS app  
    `node server.js`

10. Open any browser and go to the url `http://localhost:3000`. Click on **Load Data** button.  
   The app will make a request to the REST api at [https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=12000](https://data.cityofchicago.org/resource/xzkq-xp2w.json?$limit=12000) to load the 12000 records from the datasource.
   Then the app sends all this JSON data received from web service to my node.js server using a `POST /loadDataInDB HTTP/1.1` request.
   The server then inserts this JSON data into MongoDB and then in MySQL.

11. To execute SELECT statements from terminal, execute following command:  
    For MySQL database:
    `node scripts/sql-script.js`    
    For MongoDB database:
     `node scripts/nosql-script.js`


###References
1. [NodeJS](http://nodejs.org/)
2. [Install MongoDB on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
3. [Mongoose](http://mongoosejs.com/)
4. [MySQL JavaScript Connector: Examples](http://dev.mysql.com/doc/ndbapi/en/ndb-nodejs-examples.html)
5. [ExpressJS](http://expressjs.com/4x/api.html)
6. [AngularJS](https://angularjs.org/)
7. [Bootstrap](http://getbootstrap.com/)
8. [Markdown](http://en.wikipedia.org/wiki/Markdown)
9. [VirtualBox](https://www.virtualbox.org/)
