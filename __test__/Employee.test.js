
const Employee = require('../lib/Employee');

test('create an employee profile', () => {
    //propeties of employee name , id , email
    const employee = new Employee('camilo', 30, 'camilo12@gmail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String));
})

// ask for the employee names
test('obtain employee name', () => {
    const employee = new Employee('camilo', 30, 'camilo12@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})
// test id 
test('get employee id', () => {
    const employee = new Employee('camilo', 30, 'camilo12@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})
// test employee email
test('get employee email', () => {
    const employee = new Employee('camilo', 30, 'camilo12@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})
// test employee role
test('get employee role', () => {
    const employee = new Employee('camilo', 30, 'camilo12@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})