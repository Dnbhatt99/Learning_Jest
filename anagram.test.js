import Anagram from './anagram';

test('isAnagram function exists', () => {
  expect(typeof Anagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(Anagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(Anagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(Anagram('Hello', 'Aloha')).toBeFalsy();
});
