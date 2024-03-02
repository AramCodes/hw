function findMiddle(linkedList) {
    let slowPointer = linkedList.head;
    let fastPointer = linkedList.head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    if (linkedList.length % 2 === 0) {
        return slow.next;
    }

    const middleNode = slowPointer;

    return middleNode || null;
}

module.exports = findMiddle;

// function findMiddle(list) {
//     let slow = list.head;
//     let fast = list.head;
//     let prev = null;
//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       prev = slow;
//       slow = slow.next;
//     }
//     if (fast === null) {
//       return prev.next;
//     } else {
//       return slow;
//     }
// }
