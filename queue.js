const helpers = require("./queueHelpers");

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    //create a new Node with the data
    const node = new _Node(data);
    //if there are no items in the queue (First is null) then set Node as the new First
    if (this.first === null) {
      this.first = node;
    }
    //if there is an item in the queue (Last exists), set Node as the current Last's Next
    if (this.last) {
      this.last.next = node;
    }
    //set the Node as the new Last
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there's nothing to return
    if (this.first === null) {
      return;
    }
    //get the current First
    const node = this.first;
    //set the new First as the current First's Next
    this.first = this.first.next;
    //if the old First was the only item in the queue, make Last null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

//6.
function createQueue() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  //remove Kirk
  const oldFirst = starTrekQ.first;
  starTrekQ.dequeue();
  //remove Spock
  starTrekQ.dequeue();
  //get Uhura and set as Next
  const newNext = starTrekQ.first;
  //set Kirk as first again
  starTrekQ.first = oldFirst;
  //set Uhura as Kirk's next
  starTrekQ.first.next = newNext;
  console.log(starTrekQ);
}
