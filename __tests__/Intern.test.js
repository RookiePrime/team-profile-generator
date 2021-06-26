const Intern = require('../lib/Intern');

test('Does the Intern object exist?', () => {
    const dave = new Intern();

    expect(dave).toBeTruthy();
});

test('Does the Intern inherit all the Employee methods and properties?', () => {
    const dave = new Intern('Dave', 2, 'dave@dave.dave');

    expect(dave).toHaveProperty('name');
    expect(dave).toHaveProperty('id');
    expect(dave).toHaveProperty('email');

    expect(dave.getName()).toEqual(expect.stringContaining(dave.name));
    expect(dave.getId()).toEqual(dave.id);
    expect(dave.getEmail()).toEqual(expect.stringContaining(dave.email));

    expect(dave.getRole()).toEqual(expect.stringContaining(dave.constructor.name));
});

test('Does Intern have a school property?', () => {
    const dave = new Intern('Dave', 2, 'dave@dave.dave');
    
    expect(dave).toHaveProperty('school');
});

test('Does the Intern "getSchool()" method return the school?', () => {
    const dave = new Intern('Dave', 2, 'dave@dave.dave', 'York');
    
    expect(dave.getSchool()).toEqual(expect.stringContaining(dave.school));
});

test('Does "getRole()" return "Intern"?', () => {
    const dave = new Intern('Dave', 2, 'dave@dave.dave', 'York');
    
    expect(dave.getRole()).toEqual("Intern");
});