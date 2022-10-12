function authMiddleware (req,res,next){
    if (req.session.admin != undefined){
        next ();
    } else{
        res.send("Esta pagina es solo para el Administrador")
    }
}

module.exports = authMiddleware;