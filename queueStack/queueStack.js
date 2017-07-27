/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

const Stack = function() {
    this.count = 0;
    this.storage = {};
}
         
function TwoStackQueue() {
  this.queueOne = [];
  this.queueTwo = [];
}

TwoStackQueue.prototype.push = function (element) {
  this.queueOne.push(element);
};

TwoStackQueue.prototype.pop = function () {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();