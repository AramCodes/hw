function power(base, exp) {
    if (exp === 0) return 1;

    return base * power(base, exp - 1);
}

module.exports = power;

// iterratively
// function power(base, exponent) {
//     let result = 1;

//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     return result;
// }
