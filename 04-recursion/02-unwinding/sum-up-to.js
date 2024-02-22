function sumUpTo(num) {
    let sum = 0;

    if (num === 1) {
        return 1;
    } else {
        sum = num + sumUpTo(num - 1);
    }

    return sum;
}

module.exports = sumUpTo;
