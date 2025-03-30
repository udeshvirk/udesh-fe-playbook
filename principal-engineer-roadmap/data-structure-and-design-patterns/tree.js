// TreeNode class definition
class TreeNode {
    constructor(value) {
        this.value = value; // Node value
        this.left = null;   // Left child
        this.right = null;  // Right child
    }
}

// BinaryTree class definition
class BinaryTree {
    constructor() {
        this.root = null; // Root of the tree
    }

    // Insert a value into the tree
    insert(value) {
        const newNode = new TreeNode(value);

        // If the tree is empty, set the root to the new node
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Use a queue to perform level-order insertion
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();

            // Insert the new node as the left child if it's null
            if (current.left === null) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            // Insert the new node as the right child if it's null
            if (current.right === null) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node = this.root) {
        if (node === null) return;

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node = this.root) {
        if (node === null) return;

        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node = this.root) {
        if (node === null) return;

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }

    // Level-order traversal (Breadth-First Search)
    levelOrderTraversal() {
        if (this.root === null) return;

        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value);

            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
    }

    // Search for a value in the tree
    search(value) {
        if (this.root === null) return false;

        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();

            if (current.value === value) return true;

            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }

        return false; // Value not found
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log("In-order Traversal:");
tree.inOrderTraversal(); // Output: 4 2 5 1 6 3 7

console.log("Pre-order Traversal:");
tree.preOrderTraversal(); // Output: 1 2 4 5 3 6 7

console.log("Post-order Traversal:");
tree.postOrderTraversal(); // Output: 4 5 2 6 7 3 1

console.log("Level-order Traversal:");
tree.levelOrderTraversal(); // Output: 1 2 3 4 5 6 7

console.log("Search for 5:", tree.search(5)); // Output: true
console.log("Search for 10:", tree.search(10)); // Output: false