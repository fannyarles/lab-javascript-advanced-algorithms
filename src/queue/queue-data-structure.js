class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  // When called, canEnqueue should return true if the queue is not full, 
  // false if it is full.
  canEnqueue() {
    if ( this.queueControl.length < this.MAX_SIZE ) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if ( this.queueControl.length === 0 ) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if ( !this.canEnqueue() ) {
      throw new Error('QUEUE_OVERFLOW'); 
    }
    
    this.queueControl.push(item);
    return this.queueControl;
  }

  dequeue() {
    if ( this.isEmpty() ) {
      throw new Error ('QUEUE_UNDERFLOW');
    }

    const removedItem = this.queueControl.shift();
    return removedItem;
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
