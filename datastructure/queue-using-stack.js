/*
* Implement queue data structure in Javascript
* follow the principle of FIFO : FAST IN FIRST OUT
* */
import { Stack } from './stack.js';
class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    isEmpty() {
        return this.stack1.size() === 0 && this.stack2.size() === 0;
    }
    enqueue(val) {
        if (this.stack2.size() > 0) {
            while (this.stack2.size() > 0) {
                this.stack1.push(this.stack2.pop());
            }
        }
        this.stack1.push(val);
    }
    dequeue() {
        while (this.stack1.size() > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }
    peek() {
        while (this.stack1.size() > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.peek();
    }
    size() {
        return this.stack1.size() || this.stack2.size()
    }
    print() {
        while (this.stack1.size() > 0) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.print();
    }
}

let queue = new Queue();
console.log('size',queue.size());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.print();
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue(5);
queue.print();
console.log('size',queue.size());