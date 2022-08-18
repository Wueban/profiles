const Employee = require('./Employee')
//get employer 
class Manager extends Employee{
    //constructor 
    constructor(name , id , email, officeNum){
        super(name, id, email)

        this.officeNum = officeNum
    }

    getRole(){
        return "Manager"
    }
    

}
module.exports = Manager