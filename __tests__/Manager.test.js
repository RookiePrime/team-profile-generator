const Manager = require('../lib/Manager');

test('Does the Manager object exist?', () => {
    const dave = new Manager('Dave');

    expect(dave).toBeTruthy();
});

test('Does the Manager inherit properties from employee?', () => {
    const dave = new Manager('Dave', 2, 'dave@dave.dave');

    expect(dave).toHaveProperty('name');
    expect(dave).toHaveProperty('id');
    expect(dave).toHaveProperty('email');
});

test('Does the manager inherit methods from employee?', () => {
    const dave = new Manager('Dave', 2, 'dave@dave.dave');

    expect(dave.getName()).toEqual(expect.stringContaining(dave.name));
    expect(dave.getId()).toEqual(dave.id);
    expect(dave.getEmail()).toEqual(expect.stringContaining(dave.email));

    expect(dave.getRole()).toEqual(expect.stringContaining(dave.constructor.name));
});

test('Does the manager have an office number?', () => {
    const dave = new Manager('Dave', 2, 'dave@dave.dave', 100);

    expect(dave).toHaveProperty('officeNumber');
    expect(dave.getOfficeNumber()).toEqual(dave.officeNumber);
});

test('Does getRole() return "Manager" instead of "Employee"?', () => {
    const dave = new Manager('Dave', 2, 'dave@dave.dave', 100);
    
    expect(dave.getRole()).toEqual(expect.stringContaining('Manager'));
});