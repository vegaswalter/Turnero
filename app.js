
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
//const TurnosRoute = require('./src/routes/turnosRoutes');
// const mainRoute = require('./routes/mainRoute');
// const urserRoute = require('./routes/userRoute');

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

//a medida que se avance ir desbloquedo las rutas sino

//hay que ir migrando todo a ejs (ejs es similar a html, hay que cambiar las rutas que hay que ir viendo para que funcione)

// app.get('/', (req, res)=>{
//   res.sendFile(path.resolve(__dirname, './src/views/home.html'))
// })

// app.get('/listado', (req, res)=>{
//   res.sendFile(path.resolve(__dirname, './src/views/listado.html'))
// })

app.get('/turnos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/turnos.ejs'))
})

app.get('/login', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './src/views/login.ejs'))
})