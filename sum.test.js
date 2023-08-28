const sum = require('./sum');

test('Adding two numbers', () => {
    expect(sum(1,2)).toBe(3);
})