// emplooyee 
const Employee = require('./Employee');
const employee = require('./Employee');

// create intern constructor like in engineer
class Intern extends Employee(){
    //constructor add school

    constructor(name, id , email, school ){
        super(name, id, school);
        this.school = school
    }

}