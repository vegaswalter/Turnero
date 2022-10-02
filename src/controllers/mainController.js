/*let mainController = {
    listado: function(req,res){
        res.send("turnos anteriores "+ req.params.idMaincontroller);

    },
};

module.exports = mainController;*/

//----------------------
const controller = {
    Home :(req,res) =>{
        return res.render('home')
    },

    Turnos :(req,res) =>{
        return res.render('turnos')
    },
    ListadoTurnos :(req,res) =>{
        return res.render('listado')
    },
    Login :(req,res) =>{
        return res.render('login')
    },
};

module.exports = controller;