require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require("method-override");
const path = require("path");
const session = require('express-session');
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

// static
app.use(express.static(path.join(__dirname, 'public')))

// _method
app.use(methodOverride('_method'));

// json
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));

//routes  
//renderiza todas las vistas para no estar una a una
app.use("/", require("./src/routes/index.routes"));

app.use(session({secret:'solo el admin puede ver esto'}));

app.use((req,res,next)=>{
  res.status(404).render("not-found");
})





