function countDown(number) {
    if (number <= 0) {
        console.log("All done!");
        return;
    }

    console.log(number);
    number--;
    countDown(number);
}

module.exports = countDown;

// function countDown(number) {
//     while (number >= 0) {
//         console.log(number);
//         number--;
//     }

//     console.log("All done!");
// }
