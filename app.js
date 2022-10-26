const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require("method-override");
const path = require("path");
const session = require('express-session');
const bodyParser = require ("body-parser")
const PORT = process.env.PORT || 3000;

// port & server
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

// cors (API)
app.use(cors());

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'))

//json
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// static
app.use(express.static(path.join(__dirname, 'public')))

// _method
app.use(methodOverride('_method'));

// session

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));  

//routes  

app.use("/", require("./src/routes/index.routes"));

//404
app.use((req,res,next)=>{
  res.status(404).render("not-found");
})