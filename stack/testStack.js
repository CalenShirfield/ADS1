let s = require("./Stack");

let tempStack = new s.Stack();
tempStack.push(10);
tempStack.push(300);
tempStack.push(73);
tempStack.push(56);
tempStack.push(11);
tempStack.push(400);

console.log(tempStack.top());
// console.log(tempStack.pop());
console.log(tempStack.length());

console.log("");
console.log(tempStack.show());
