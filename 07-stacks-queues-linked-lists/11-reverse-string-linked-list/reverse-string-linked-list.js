const { LinkedList } = require("./linked-list");

function reverseStringLinkedList(str) {
    const list = new LinkedList();

    for (let i = str.length - 1; i >= 0; i--) {
        list.add(str[i]);
    }

    let reversed = "";

    let currentNode = list.head;

    while (currentNode !== null) {
        reversed += currentNode.data;
        currentNode = currentNode.next;
    }

    return reversed;
}

module.exports = reverseStringLinkedList;
