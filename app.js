
const express = require("express");
const app = express();
const path =  require ("path");
// const TurnosRoute = require('./routes/turnosRoutes');
// const mainRoute = require('./routes/mainRoute');
// const urserRoute = require('./routes/userRoute');

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
//hay que ir migrando todo a ejs (ejs es similar a html, hay que cambiar las rutas que hay que ir viendo para que funcione)
app.get('/turnos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/turnos.html'))
})
app.get('/listado', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/listado.html'))
})
app.get('/login', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})

app.use("/", require("./src/routes/turnosRoutes.js"));
//app.use("/", require("./src/routes/mainRoute.js"));

//a medida que se avance ir desbloquedo las rutas sino