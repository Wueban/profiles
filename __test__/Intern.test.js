
const Intern = require('../lib/Intern');
//create a intern like employee
test('create an intern', () => {
    // add school
    const intern = new Intern('camilo', 30, 'camilo12@gmail.com', 'columbia');

    expect(intern.school).toEqual(expect.any(String));
});