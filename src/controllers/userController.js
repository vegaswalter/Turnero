

const db = require("../database/models");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");


let userController = {
    login: function(req,res){
        return res.render ("login")
    },
    processLogin: function (req,res){
        let errors = validationResult (req);
        if (errors.isEmpty()) {
            let userJSON = fs.readFileSync(user.json);
            let user;
            if (userJSON == ""){
                user = [];
            } else{
                user = JSON.parse(userJSON);
            }
            for (let i = 0; i < user.lenght; i++){
                if (user[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, user[i].password)) {
                       let admin = user [i];
                       break; 
                    }
                }
            }
            if (admin == undefined) {
                return res.render("login", {errors: [
                    {
                        msg:"Credenciales invalidas"
                    }
                ]
                })
            }
            req.session.admin = admin;
            res.render("HOLA")
        } else {
            return res.render ("login", {errors: errors.errors})
        }
    }
    
}

module.exports = userController;
