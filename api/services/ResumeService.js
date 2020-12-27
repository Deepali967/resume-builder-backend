var Promise = require("bluebird");
const { LocalStorage } = require('node-localstorage')
const store = new LocalStorage('./resume')


var uuid = require("uuid").v4;

function ResumeService(){

}

ResumeService.prototype.getResume = async function(user,body){
    let item = await store.getItem("resume_"+user);
    item = JSON.parse(item);
    return item;
}

ResumeService.prototype.saveResume = async function(user,body){
    body._id = uuid();
    await store.setItem("resume_"+user,JSON.stringify(body));
    return {id:uuid()};
}


module.exports = {
    getInst : function(){
        return new ResumeService();
    }
}