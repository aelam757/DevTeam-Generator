const Employee = require('./Employee');

class Manager extends Employee{
    constructor (id, name, email, officeNum){
       super(id,name,email);
        this.title = 'Manager';
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