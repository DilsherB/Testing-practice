const capitalize = require('./task4');

const isSentenceCase = (word) => /^\p{Lu}/u.test(word);

it('isUpperCase', () => {
    expect(isSentenceCase(capitalize('dilsher'))).toBeTruthy();
})