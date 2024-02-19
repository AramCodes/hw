function arrayIntersection(array, array2) {
    let intersection = [];

    for (let i = 0; i < array.length; i++) {
        if (array2.includes(array[i])) {
            intersection.push(array[i]);
        }
    }

    return intersection;
}

module.exports = arrayIntersection;

// function arrayIntersection(arr1, arr2) {
//     const set1 = new Set(arr1);

//     const intersection = [];

//     for (let num of arr2) {
//       if (set1.has(num)) {
//         intersection.push(num);
//       }
//     }
//     return intersection;
//   }
