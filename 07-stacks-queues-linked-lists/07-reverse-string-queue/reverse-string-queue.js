const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
    const queue = new Queue();

    const reverseStr = str.split("").reverse();

    for (let i = 0; i < reverseStr.length; i++) {
        queue.enqueue(reverseStr[i]);
    }

    return queue.queue.join("");
};

module.exports = reverseStringWithQueue;

// const reverseStringWithQueue = () => {
// //   const queue = new Queue();
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     queue.enqueue(str[i]);
// //   }
// //   let reversedString = '';
// //   while (!queue.isEmpty()) {
// //     reversedString += queue.dequeue();
// //   }
// //   return reversedString;
// // };
