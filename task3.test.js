const Calculator = require("./task3")

const calc = new Calculator;

describe('calc', () => {
    it('Addition: 2+8 must be equal 10', () => {
        expect(calc.add(2, 8)).toBe(10);
    });
    it('Addition: 12+8 must be equal 20', () => {
        expect(calc.add(12, 8)).toBe(20);
    });
    it('Addition: 2+8 must be equal 10', () => {
        expect(calc.add(5.8, 8)).toBe(13.8);
    });
    it('Subtraction: 2-8 must be equal -6', () => {
        expect(calc.subtract(2, 8)).toBe(-6);
    });
    it('Subtraction: 8-2 must be equal 6', () => {
        expect(calc.subtract(8, 2)).toBe(6);
    });
    it('Subtraction: 12-8 must be equal 4', () => {
        expect(calc.subtract(12, 8)).toBe(4);
    });
    it('Division: 9/2 must be 4.5', () => {
        expect(calc.divide(9, 2)).toBe(4.5);
    });
    it('Division by 0: 5/2 must be error', () => {
        expect(calc.divide(5, 0)).toBe('cannot divide by 0');
    });
    it('Division: 50/2 must be 25', () => {
        expect(calc.divide(50, 2)).toBe(25);
    });
    it('Multiplication: 9*2 must be 18', () => {
        expect(calc.multiply(9, 2)).toBe(18);
    });
    it('Multiplication: 90*8 must be 720', () => {
        expect(calc.multiply(90, 8)).toBe(720);
    });
    it('Multiplication: 19*9 must be 171', () => {
        expect(calc.multiply(19, 9)).toBe(171);
    });
})