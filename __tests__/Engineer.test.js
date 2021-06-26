const Engineer = require('../lib/Engineer');

test('Does the Engineer object exist?', () => {
    const dave = new Engineer();

    expect(dave).toBeTruthy();
});

test('Does Engineer inherit its properties and methods from Employee?', () => {
    const dave = new Engineer('Dave', 2, 'dave@dave.dave');

    expect(dave).toHaveProperty('name');
    expect(dave).toHaveProperty('id');
    expect(dave).toHaveProperty('email');
    expect(dave.getName()).toEqual(expect.stringContaining(dave.name));
    expect(dave.getId()).toEqual(dave.id);
    expect(dave.getEmail()).toEqual(expect.stringContaining(dave.email));
    expect(dave.getRole()).toEqual(expect.stringContaining(dave.constructor.name));
});

test('Does Engineer have a github property?', () => {
    const dave = new Engineer('Dave', 2, 'dave@dave.dave');

    expect(dave).toHaveProperty('github');
});

test("Does the Engineer's getGitHub() return the github property?", ()=> {
    const dave = new Engineer('Dave', 2, 'dave@dave.dave', 'davimus');

    expect(dave.getGitHub()).toEqual(expect.stringContaining(dave.github));
});

test('Does getRole() return "Engineer" instead of "Employee"?', () => {
    const dave = new Engineer('Dave', 2, 'dave@dave.dave', 'davimus');

    expect(dave.getRole()).toEqual(expect.stringContaining(dave.constructor.name));
});