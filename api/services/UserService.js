var Promise = require("bluebird");
const { LocalStorage } = require('node-localstorage')
const store = new LocalStorage('./user')


var uuid = require("uuid").v4;

function UserService(){

}

UserService.prototype.getUsers = async function(body){
    let item = await store.getItem("profile_"+body.username+"_"+body.password);
    item = JSON.parse(item);
    return item;
}

UserService.prototype.saveUsers = async function(body){
    body._id = uuid();
    await store.setItem("profile_"+body.username+"_"+body.password,JSON.stringify(body));
    return {id:uuid()};
}


module.exports = {
    getInst : function(){
        return new UserService();
    }
}