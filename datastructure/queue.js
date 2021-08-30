/*
* Implement queue data structure in Javascript
* follow the principle of FIFO : FAST IN FIRST OUT
* */

class Queue {
    constructor() {
        this.#items = [];
    }
    isEmpty() {
        return this.#items.length === 0;
    }
    enqueue(val) {
        this.#items.push(val);
    }
    dequeue() {
        this.#items.shift();
    }
    peek() {
        return this.#items[0];
    }
    size() {
        return this.#items.length;
    }
    print() {
        console.log(this.#items);
    }
}

let queue = new Queue();
console.log(queue.size());
queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.print();