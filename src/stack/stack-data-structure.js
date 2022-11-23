class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  //When called, canPush should return true if the stack is not full, 
  // false if it is full.
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  // When called, isEmpty should return true if the stack is empty, false if it holds any item.
  isEmpty() {
    if (this.stackControl.length === 0) { return true; } else { return false; }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {

    if ( this.isEmpty() ) {
      throw new Error('STACK_UNDERFLOW');
    }

    const deletedItem = this.stackControl.pop();
    return deletedItem;

  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
