function removeDuplicates(array) {
    const uniqueItems = [];

    array.forEach((item) => {
        if (!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}

module.exports = removeDuplicates;

// function uniqueValues(arr) {
//     const unique = new Set(arr);
//     const array = Array.from(unique);
//     return array;
// }

// function removeDupesFromArray(arr) {
//     return [...new Set(arr)];
// }

// function removeDuplicates(arr) {
//     // Use the Set object to remove duplicates. This works because Sets only store unique values
//     return Array.from(new Set(arr));
// }
