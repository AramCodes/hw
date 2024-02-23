function numberRange(startNum, endNum) {
    if (startNum === endNum) return [startNum];

    const range = numberRange(startNum, endNum - 1);
    range.push(endNum);

    return range;
}

module.exports = numberRange;

// function numberRange(startNum, endNum) {
//     if(startNum === endNum) return [endNum];
//     return [startNum, ...numberRange(startNum + 1, endNum)]
// }
