//use require
const Engineer = require('../lib/Engineer');

// create an engineer profile with gihub

test('create an engineer object', ()=> {
    const engineer = new Engineer('camilo', 30, 'camilo12@gmail.com', 'camilola12');

    expect(engineer.github).toEqual(expect.any(String));
})