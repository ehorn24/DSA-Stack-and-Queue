// 2.
const helpers = {
  peek(stack) {
    console.log(stack.top);
  },

  isEmpty(stack) {
    if (stack.top === null) {
      return true;
    }
    return false;
  },

  display(stack) {
    console.log(stack);
  },
};

module.exports = helpers;
