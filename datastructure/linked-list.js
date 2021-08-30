class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    size() {
        if (!this.head) {
            return 0;
        }
        let size = 1;
        let currentNode = this.head;
        while (currentNode.next) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }
    prepend(val) {
        const newNode = new LinkedListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    append(val) {
        const newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            return newNode;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    insertAt(index, val) {
        if (index === 0) {
            this.prepend(val);
            return this.head;
        }
        if (index === this.size()) {
            this.append(val);
            return this.head;
        }
        if (index > this.size()) {
            return null;
        }
        const newNode = new LinkedListNode(val);
        let counter = 1;
        let previous = this.head;
        let currentNode = this.head.next;
        while (currentNode) {
            if (counter === index) {
                newNode.next = currentNode;
                previous.next = newNode
                return;
            }
            counter++;
            previous = currentNode;
            currentNode = currentNode.next;
        }
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        return nodes;
    }

    findIndex(val) {
        if (!this.head) {
            return null
        };
        if (this.head.value === val) {
            return 0;
        }
        let index = 1;
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value === val) {
                return index
            }
            index++;
            currentNode = currentNode.next;
        }
        return null
    }

    findNodeAt(index) {
        if (!this.head) {
            return null
        };
        if (index === 0) {
            return this.head;
        }
        let counter = 1;
        let currentNode = this.head.next;
        while (currentNode) {
            if (counter === index) {
                return currentNode
            }
            counter++;
            currentNode = currentNode.next;
        }
        return null
    }

    delete(val) {
        if (!this.head) {
            return null
        };
        if (this.head.value === val) {
            this.head = this.head.next;
            return;
        }
        let previous = this.head;
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value === val) {
                previous.next = currentNode.next;
                return;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    deleteAt(index) {
        if (!this.head) {
            return null
        };
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let counter = 1;
        let previous = this.head;
        let currentNode = this.head.next;
        while (currentNode) {
            if (counter === index) {
                previous.next = currentNode.next;
                return;
            }
            counter++;
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    deleteHead() {
        if (!this.head) {
            return null
        };
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        return this.head;
    }

    deleteTail() {
        if (!this.head) {
            return null
        };
        if (!this.head.next) {
            this.head = null;
            return this.head
        }
        let previous = this.head;
        let currentNode = this.head.next;
        while (currentNode.next) {
            previous = currentNode;
            currentNode = currentNode.next;
        }
        previous.next = null;
    }

    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }

}

const list = new LinkedList();
list.append(222);
list.append(444);
list.append(555);
list.prepend(111);
console.log(list.toArray());
console.log(list.insertAt(2, 333));
console.log(list.insertAt(5, 666));
console.log(list.toArray());
console.log(list.size());
console.log(list.reverse());
console.log(list.toArray());
console.log(list.head);



