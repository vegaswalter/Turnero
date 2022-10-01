const express = require("express");
const path = require("path");
const app = express();
// const port = process.env.PORT || 8080;



// port & server
app.listen(5000, (req, res) => {
  console.log("server corriendo en el puerto 5000");
});

app.set("views", path.join(__dirname, "./src/views"));