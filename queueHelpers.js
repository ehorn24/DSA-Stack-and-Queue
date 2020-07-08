const helpers = {
  peek(queue) {
    console.log(queue.first);
  },
  isEmpty() {
    if (queue.first === null) {
      return true;
    }
    return false;
  },
  display(queue) {
    console.log(queue);
  },
};
