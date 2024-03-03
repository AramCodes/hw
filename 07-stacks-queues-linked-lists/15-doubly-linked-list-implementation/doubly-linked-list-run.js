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

console.log(list.get(3));
console.log(list.get(3).data);

list.remove(3);
list.remove(4);

console.log(list.contains("new"));
console.log(list.contains(200));

list.printAll();
