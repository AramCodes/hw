function sumOfEvenSquares(nums) {
    const even = nums.filter((num) => num % 2 === 0);
    const squares = even.map((num) => num * num);
    return squares.reduce((sum, square) => sum + square, 0);
}

module.exports = sumOfEvenSquares;

// chained version of above
// function sumOfEvenSquares(numbers) {

//     const evenSquares = numbers
//         .filter((num) => num % 2 === 0)
//         .map((num) => num ** 2)
//         .reduce((sum, square) => sum + square, 0);

//     return evenSquares;
// }
