const DoublyLinkedList = require("./doubly-linked-list");

const list = new DoublyLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.append(500);

list.prepend(50);

list.insertAt(3, 250);
list.insertAt(5, 350);

list.printAll();
