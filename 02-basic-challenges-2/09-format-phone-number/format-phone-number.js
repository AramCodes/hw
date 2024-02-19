function formatPhoneNumber(nums) {
    const formatedNum = `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;

    return formatedNum;
}

module.exports = formatPhoneNumber;

// function formatPhoneNumber(numbers) {
//     const areaCode = numbers.slice(0, 3).join('');
//     const prefix = numbers.slice(3, 6).join('');
//     const lineNumber = numbers.slice(6).join('');

//     return `(${areaCode}) ${prefix}-${lineNumber}`;
// }
// OR
// function formatPhoneNumber(numbers) {
//     // Join all the numbers together
//     const formatted = numbers.join('');
//     // Return the formatted phone number
//     return `(${formatted.substring(0, 3)}) ${formatted.substring(
//       3,
//       6
//     )}-${formatted.substring(6)}`;
// }
// OR
// const formatPhoneNumber = (numbers) =>
//   `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers
//     .slice(6)
//     .join('')}`;
