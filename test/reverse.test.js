// const reverseString = require('../reverse')
import reverse from '../reverse';

test('reverseString function exists', () => {
    expect(reverse).toBeDefined();
});
  
test('String reverses', () => {
    expect(reverse('hello')).toEqual('olleh');
});
  
test('With uppercase', () => {
    expect(reverse('Hello')).toEqual('olleh');
});
