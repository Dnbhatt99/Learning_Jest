// const anagram = require('../anagram')
import anagram from '../anagram';

test('isAnagram function exists', () => {
  expect(typeof anagram).toEqual('function');
});

test('isAnagram function exists', () => {
  expect(anagram).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(anagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(anagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(anagram('Hello', 'Aloha')).toBeFalsy();
});
