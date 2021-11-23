let q = require("./Queue.js");

let tempQueue = new q.Queue();

for (var i = 0; i < 10; i++) {
  tempQueue.enqueue(Math.floor(Math.random() * 30));
}

// tempQueue.enqueue(300);
// tempQueue.enqueue(73);
// tempQueue.enqueue(56);
// tempQueue.enqueue(11);
// tempQueue.enqueue(400);

console.log(tempQueue);
// console.log(tempQueue.head());
// console.log(tempQueue.dequeue());
// console.log(tempQueue.head());
// console.log(tempQueue);

console.log(tempQueue.isEmpty());

while (!tempQueue.isEmpty()) {
  tempQueue.dequeue();
}

console.log(tempQueue.isEmpty());

// console.log(tempQueue.top());
// // console.log(tempQueue.pop());
// console.log(tempQueue.length());

// console.log("");
// console.log(tempQueue.show());
