/*
* Implement stack data structure in Javascript
* follow the principle of LIFO : LAST IN FIRST OUT
* */

export class Stack {
    #items = [];
    isEmpty() {
        return this.#items.length === 0;
    }
    push(val) {
        this.#items.push(val);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("UnderFlow");
            return;
        }
        return this.#items.pop();
    }
    peek() {
        return this.#items[this.#items.length - 1];
    }
    size() {
        return this.#items.length;
    }
    print() {
        console.log(this.#items);
    }
}

let stack = new Stack();
console.log(stack.size());
stack.push(1);
stack.print();
stack.push(2);
stack.push(3);
stack.pop();
stack.print();