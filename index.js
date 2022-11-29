var express = require('express');
const mysql = require('mysql');
var router = express.Router();

// database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'matt',
  password: 'matt',
  database: 'yourspace'
})
// db connection
connection.connect();

// test route
router.get('/', function(req, res, next) {
  res.send("home route");
});

// signup route
router.post('/signup', function(req,res,next){
  console.log(req.body);
  let email = req.body.email;
  let fullname = req.body.fullname;
  let password = req.body.password;
  let Q = 
  'insert into users (user_fullname, user_email, user_password) values (fullname, email, password);'
  // connection.query(Q);
});

// login route
router.get('/login', function(req,res,next){
  res.send("test route");
});


// export to app
module.exports = router;
