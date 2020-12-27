var ResumeServiceInst = require("../services/ResumeService.js").getInst();


module.exports.init = function (app){

    app.get("/api/user/:user/resume",(req,res)=>{
        var body = req.body;
        var user = req.params.user;
        return ResumeServiceInst.getResume(user,body)
        .then((resp)=>{
            res.send(resp);
        })
    });

    app.post("/api/user/:user/resume",(req,res)=>{
        var body = req.body;
        var user = req.params.user;
        return ResumeServiceInst.saveResume(user,body)
        .then((resp)=>{
            res.send(resp);
        })
    });


}