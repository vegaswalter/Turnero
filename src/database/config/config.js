/*require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

let sql = "SELECT * FROM orderly_turns;";

pool.execute(sql, function (err, result) {
  if (err) throw err;

<<<<<<< HEAD
 result.forEach((res) => {

=======
  result.forEach((res) => {
    
>>>>>>> 8c02642a7780e44aecfbcafdaa9df6dcaee3bf8b
console.log(res.code)
  })
});

let sql1 = "SELECT * FROM users;";
pool.execute(sql1, function (err, result) {
  if (err) throw err;

  result.forEach((res) => {

console.log(res.name)
  })
});

<<<<<<< HEAD

module.exports = pool.promise();

*/
require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
=======
let sql2 = "SELECT * FROM orderly_turns";

pool.execute(sql2, function (err, result){
  if (err) throw err;
  result.forEach((res) => {
    console.log(res.code)
  })
>>>>>>> 8c02642a7780e44aecfbcafdaa9df6dcaee3bf8b
});

let sql = "SELECT * FROM orderly_turns;";

pool.execute(sql, function (err, result) {
 

  

console.log(err.code)
  })

let sql1 = "SELECT * FROM users;";
pool.execute(sql1, function (res, result) {
  

  
console.log(err.name)
  })

let sql2 = "SELECT * FROM orderly_turns";

pool.execute(sql2, function (err, result){
  
    console.log(err.code)
  })



module.exports = pool.promise();