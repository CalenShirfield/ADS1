let q = require("./Queue.js");

let tempQueue = new q.Queue();

for (var i = 0; i < 10; i++) {
  tempQueue.enqueue(Math.floor(Math.random() * 30));
}

console.log(tempQueue);

console.log(tempQueue.isEmpty());

while (!tempQueue.isEmpty()) {
  console.log(`${tempQueue.head()} \n`);
  tempQueue.dequeue();
}

console.log(tempQueue.isEmpty());
