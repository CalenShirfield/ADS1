class Stack {
  constructor() {
    this.s = [];
  }
  // push function array method
  push(element) {
    this.s.push(element);
  }
  // pop function utilizing array method
  pop(element) {
    if (this.s.length == 0) {
      return "underflow!";
    } else {
      return this.s.pop();
    }
  }
  // length function array prototype property
  length() {
    return this.s.length;
  }
  // top function to reveal top of stack without removing element
  top() {
    return this.s[this.s.length - 1];
  }
  // isEmpty function
  isEmpty() {
    if (this.s.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  // show function lists elements vertically in order aa a string
  show() {
    let list = "";
    for (let i = this.s.length - 1; i > -1; i--) {
      list += this.s[i] + "\n";
    }
    return list;
  }
}
// class end

module.exports.Stack = Stack;
