const Intern = require('../lib/Intern');
//create a intern like employee
test('create an intern', () => {
    // add school
    const intern = new Intern('camilo', 30, 'camilo12@gmail.com', 'columbia');

    expect(intern.school).toEqual(expect.any(String));
});

//retrive the school
test('get the school name ', () => {
    const intern = new Intern('camilo', 30, 'camilo12@gmail.com', 'columbia');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

//get role
test('get role of employee', () => {
    const intern = new Intern('camilo', 30, 'camilo12@gmail.com', 'columbia');

    expect(intern.getRole()).toEqual('Intern')
})