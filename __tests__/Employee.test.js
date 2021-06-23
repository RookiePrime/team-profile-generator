const employee = require('../lib/Employee');

test('Does Employee exist?', () => {
    const dave = new employee();

    expect(dave).toBeTruthy();
});

test('Does Employee have a name, id and email?', () => {
    const dave = new employee('Dave', '1', 'dave@dave.com');

    expect(dave).toHaveProperty('name');
    expect(dave).toHaveProperty('id');
    expect(dave).toHaveProperty('email');
});

test('Can the name be accessed via getName()?', () => {
    const dave = new employee('Dave');

    expect(dave.getName()).toBe('Dave');
});

test('Can the id be accessed via getId()?', () => {
    const dave = new employee('Dave', '1');

    expect(dave.getId()).toEqual(expect.stringContaining(dave.id));
});

test('Can the email be accessed via getEmail()?', () => {
    const dave = new employee('Dave', '1', 'dave@dave.com');

    expect(dave.getEmail()).toEqual(expect.stringContaining(dave.email));
});

test('Can the role of the employee be accessed via getRole()?', () => {
    const dave = new employee('Dave', '1', 'dave@dave.com');

    expect(dave.getRole()).toEqual(expect.stringContaining(dave.constructor.name));
});