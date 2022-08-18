// emplooyee 
const Employee = require('./Employee');


// create intern constructor like in engineer
class Intern extends Employee {
    //constructor add school

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    // get school from users input
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }

}

module.exports = Intern;