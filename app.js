
const express = require("express");
const app = express();
const path =  require ("path");
// const mainRoute = require('./routes/mainRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
})
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../views/listado.html'))
})
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../views/login.html'))
})