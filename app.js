
const express = require("express");
const app = express();
const path =  require ("path");
// const mainRoute = require('./routes/turnosRoutes');
// const mainRoute = require('./routes/mainRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/home.html'))
})

app.get('/turnos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/turnos.html'))
})
app.get('/listado', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/listado.html'))
})
app.get('/login', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})

// app.use("/", require("./src/routes/turnosRoutes.js"));
app.use("/", require("./src/routes/mainRoute.js"));