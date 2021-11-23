class Queue {
  constructor() {
    this.q = [];
  }

  // top function to reveal head of queue without removing element
  head() {
    return this.q[this.q.length - 1];
  }

  // enqueue function utilizing push array method
  enqueue(element) {
    this.q.push(element);
  }
  // dequeue function utilizing splice array method
  dequeue(element) {
    return this.q.splice(this.q.length - 1, 1);
  }

  // isEmpty function
  isEmpty() {
    if (this.q.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
// class end

module.exports.Queue = Queue;
