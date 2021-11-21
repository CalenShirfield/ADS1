let s = require("./Stack");

let tempStack = new s.Stack();
tempStack.push(10);
tempStack.push(300);
tempStack.push(56);

console.log(tempStack.top());
console.log(tempStack.pop());
console.log(tempStack.length());
console.log(tempStack.show());
