const helpers = require("./stackHelpers");

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the stack is empty (top is null) then the data (node) will be at the top of the stack
    if (this.top === null) {
      //create new Node from data and set as top of stack. set Next value as null as there is nothing else in the stack.
      this.top = new _Node(data, null);
      return this.top;
    }
    //if stack is not empty, create new Node variable with the value as data and Next as the current top
    const node = new _Node(data, this.top);
    //set top as the new Node
    this.top = node;
  }

  pop() {
    //get the current top
    const node = this.top;
    //set the new top as the current top's next value (the second item in the stack)
    this.top = node.next;
    //return the removed item's data
    return node.data;
  }
}

// 1.
function createStackClass() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  //get Scotty
  let oldTop = starTrek.top;
  //set Top as McCoy
  starTrek.top = starTrek.top.next;
  //remove McCoy
  starTrek.pop();
  //put Scotty back in stack
  starTrek.push(oldTop);
  helpers.display(starTrek);
}

// 3.
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let str = s;
  let stack = new Stack();
  while (str) {
    stack.push(str.slice(0, 1));
    str = str.slice(1);
  }
  while (helpers.isEmpty(stack) === false) {
    str = str + stack.pop();
  }
  if (s === str) {
    return true;
  }
  return false;
}

// 4.
function matchParantheses(exp) {
  let counter = 0;
  [...exp].forEach((c) => {
    if (c === "(") {
      counter++;
    } else if (c === ")") {
      counter--;
    }
  });
  if (counter === 0) {
    return true;
  }
  return false;
}

// 5.
function sortStack(arr) {
  let stack = new Stack();
  arr.sort((a, b) => {
    return b - a;
  });
  arr.map((x) => {
    stack.push(x);
  });
  console.log(stack);
}
