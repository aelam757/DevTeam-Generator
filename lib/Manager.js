const Employee = require('./Employee');

class Manager {
    constructor (id, name, email, officeNum){
        this.title = 'Manager';
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNum = officeNum;
    }
    getRole(){
        return this.title;
    }
    getOfficeNum(){
        return this.officeNum;
    }
}
module.exports = Manager;