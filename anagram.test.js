// const Anagram = require('./anagram')
import Anagram from './anagram';

test('Checking if Anagram function exists - 1', () => {
    expect(typeof Anagram).toEqual('function');
});

test('Checking Anagram strings - 2', () => {
    expect(Anagram('listen', 'silent')).toBeTruthy();
});

test('Checking Anagram strings - 3', () => {
    expect(Anagram('LISTEN', 'silent123')).toBeTruthy();
});

test('Checking Anagram strings - 4', () => {
    expect(Anagram('list', 'silent')).toBeFalsy();
});

test('Checking Anagram strings - 5', () => {
    expect(Anagram('', 'silent')).toBeFalsy();
});
