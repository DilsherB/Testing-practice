const stringLength = require('./task1');

it('length', () => {
    expect(stringLength('hello!')).toBe(6);
});

it('out of range', () => {
    expect(stringLength('')).toBeFalsy();
});

it('out of range', () => {
    expect(stringLength('How are you budy')).toBeFalsy();
});

