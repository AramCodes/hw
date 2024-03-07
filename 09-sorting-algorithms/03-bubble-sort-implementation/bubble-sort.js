function bubbleSort(numArr) {
    for (let i = 0; i < numArr.length - 1; i++) {
        for (let j = 0; j < numArr.length - i - 1; j++) {
            if (numArr[j] > numArr[j + 1]) {
                let temp = numArr[j];
                numArr[j] = numArr[j + 1];
                numArr[j + 1] = temp;
            }
        }
    }

    return numArr;
}

module.exports = bubbleSort;

// function bubbleSort(arr) {
//     const len = arr.length;
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < len - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap using destructuring
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// }

// function bubbleSort(arr) {
//     let swapped = false;

//     while (!swapped) {
//       swapped = true;

//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//           const temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = false;
//         }
//       }
//     }

//     return arr;
// }
