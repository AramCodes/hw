const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

// const result = myHashTable._hash("John", myHashTable.limit);

// console.log(result);

myHashTable.set("John", "555-234-3455");
myHashTable.set("James", "555-349-3948");
myHashTable.set("Sarah", "555-469-3938");

// myHashTable.remove("John");
// myHashTable.has("John");

myHashTable.printTable();
