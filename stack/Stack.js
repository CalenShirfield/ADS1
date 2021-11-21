class Stack {
  constructor() {
    this.pile = [];
  }
  // push function array method
  push(element) {
    this.pile.push(element);
  }
  // pop function utilizing array method
  pop(element) {
    if (this.pile.length == 0) {
      return "underflow!";
    } else {
      return this.pile.pop();
    }
  }
  // length function array prototype property
  length() {
    return this.pile.length;
  }
  // top function to reveal top of stack without removing element
  top() {
    return this.pile[this.pile.length - 1];
  }
  // isEmpty function
  isEmpty() {
    if (this.pile.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  // show function lists all elements of stack as a string
  show() {
    let list = "";
    for (let i = 0; i < this.pile.length; i++) {
      list += this.pile[i] + " ";
    }
    return list;
  }
}
// class end

module.exports.Stack = Stack;
