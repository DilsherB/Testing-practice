const reverseString = require('./task2');
it('reverse string', () => {
    expect(reverseString('123456789')).toBe('987654321');
})