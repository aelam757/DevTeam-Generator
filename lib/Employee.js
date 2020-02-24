class Employee {
    constructor (name, id, email){
        this.title = 'Employee';
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getRole(){
        return this.title;
    }
    getEmail(){
        return this.email;
    }
}
module.exports = Employee;