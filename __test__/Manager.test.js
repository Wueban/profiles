
const Manager = require('../lib/Manager');

// test, manager object
test('get manager office', () =>{
    //manager office 
    const manager = new Manager('camilo', 30, 'camilo12@gmail.com', 1)

    expect(manager.officeNum).toEqual(expect.any(Number));
})

// role 
test('get role ', () => {
    const manager= new Manager('camilo', 30, 'camilo12@gmail.com')

    expect(manager.getRole()).toEqual("Manager")
})