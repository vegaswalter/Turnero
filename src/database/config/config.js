require("dotenv").config();
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

  result.forEach((res) => {
    
console.log(res.name)
  })
});
let sql1 = "SELECT * FROM users;";
pool.execute(sql1, function (err, result) {
  if (err) throw err;

  result.forEach((res) => {
    
console.log(res.name)
  })
});

let sql1 = "SELECT * FROM oorderly_turns";

pool.execute(sql1, function (err, result){
  if (err) throw err;
  result.forEach((res) => {
    console.log(res.code)
  })
})


module.exports = pool.promise();