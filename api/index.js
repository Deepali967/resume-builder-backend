var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require("fs");

app.get('/api/sync_time', function(req, res) {
    res.send([new Date().toISOString()]);
});

app.use(bodyParser.json({limit: '10mb', extended: true}));

function init(path,app){
    var restPath = path + "/rest";
    var files = fs.readdirSync(restPath);

    files.forEach((file)=>{
        var filePath = [restPath,file].join("/");
        console.log("registering route:",filePath);
        require(filePath).init(app);
    })
}



init(__dirname,app);
module.exports.start = function(){
    return app.listen(process.env.API_PORT || 5000, function(err) {
        if (err) {
            console.log('Error in starting api server:', err);
        }

        console.log("api server listening on",  process.env.API_PORT || 5000);
    });
}