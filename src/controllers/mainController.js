/*let mainController = {
    listado: function(req,res){
        res.send("turnos anteriores "+ req.params.idMaincontroller);

    },
};

module.exports = mainController;*/

//----------------------
const mainController = {
    home :(req,res) =>{
        return res.render('home')
    },
};

module.exports = mainController;