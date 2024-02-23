function factorial(num) {
    if (num < 2) {
        return 1;
    }

    return num * factorial(num - 1);
}

module.exports = factorial;

// const factorial = (num) => num === 0 || num === 1 ? 1 : num * factorial(num - 1);
