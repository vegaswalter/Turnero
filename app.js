
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// port & server
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'))

// static
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use("/", require("./src/routes/index.routes"));