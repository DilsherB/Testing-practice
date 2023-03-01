class Calculator {
    add(a, b) { return a + b };
    subtract(a, b) { return a - b };
    divide(a, b) { return b === 0 ? 'cannot divide by 0' : a / b };
    multiply(a, b) { return a * b };
}

module.exports = Calculator;