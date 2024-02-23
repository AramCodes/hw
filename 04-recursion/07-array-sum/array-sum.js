function arraySum(numArry) {
    if (numArry.length === 0) return 0;

    return numArry[0] + arraySum(numArry.slice(1));
}

module.exports = arraySum;
