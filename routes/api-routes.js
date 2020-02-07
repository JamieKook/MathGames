const db = require("../models"); 

module.exports = function(app){
    app.post("/accounts", function(req, res){
        console.log(req.body); 
        db.Account.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            favoriteAnimal: req.body.favoriteAnimal,
            favoriteColor: req.body.favoriteColor,
            counters: req.body.counters
        }).then(function(results){
            res.json(results); 
        }); 
    }); 

}; 