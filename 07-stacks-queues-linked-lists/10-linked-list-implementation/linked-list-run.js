const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add("it's");
list.add("that");
list.add("this");
list.add("like");
list.add("doin it");

list.printAll();

console.log(list.get(2));
console.log(list.get(3));

list.insertAt(5, "and");

list.printAll();

list.removeFrom(2);

list.printAll();
