const exp = require('constants');
const sum = require('../sum');

test('Adding two numbers', () => {
    expect(sum(1,2)).toBe(3);
});

// test('User should be Brad Traversy object', () => {
//     expect(functions. createUser()).toBe({
//     firstName: 'Brad',
//     lastName: 'Traversy'  
//     })
// });

// test('Testing Regex', () => {
//     expect('team').not.toMatch(/I/i);
// });

// test('Admin should be in usernames', () => {
//     usernames = ['john', 'karen', 'admin'];
//     expect(usernames).toContain('admin');
// });

// test('Axios JSON Placeholder testing', () => {
//     expect.assertions(1);
//     return fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     });
// });


