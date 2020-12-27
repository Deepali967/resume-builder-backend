var userServiceInst = require("../services/UserService.js").getInst();


module.exports.init = function (app){

    app.get("/api/user",(req,res)=>{
        var body = req.body;
        return userServiceInst.getUsers(body)
        .then((resp)=>{
            res.send(resp);
        })
    });

    app.post("/api/user",(req,res)=>{
        var body = req.body;

        return userServiceInst.saveUsers(body)
        .then((resp)=>{
            res.send(resp);
        })
    });


}