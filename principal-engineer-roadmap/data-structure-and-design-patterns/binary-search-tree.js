/*
 * Binary Search Tree Implementation in JavaScript
 * Provides methods for insertion, deletion, traversal, and searching.
 */

// Node class to represent each node in the tree
class Node {
    constructor(data) {
        this.data = data; // Value of the node
        this.left = null; // Left child
        this.right = null; // Right child
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the tree
    }

    // Insert a new node into the tree
    insert(data) {
        const newNode = new Node(data);

        // If the tree is empty, set the root to the new node
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Otherwise, find the correct position for the new node
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively find the correct position for a new node
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // Move to the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Move to the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Remove a node with the given data
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    // Helper method to recursively remove a node
    removeNode(node, key) {
        if (node === null) return null;

        if (key < node.data) {
            // Move to the left subtree
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            // Move to the right subtree
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // Node to be deleted found

            // Case 1: Node with no children
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: Node with one child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 3: Node with two children
            const aux = this.findMinNode(node.right); // Find the minimum node in the right subtree
            node.data = aux.data; // Replace the node's data with the minimum node's data
            node.right = this.removeNode(node.right, aux.data); // Remove the duplicate node
            return node;
        }
    }

    // Find the minimum node starting from a given node
    findMinNode(node) {
        if (node.left === null) return node;
        return this.findMinNode(node.left);
    }

    // Get the root of the tree
    getRootNode() {
        return this.root;
    }

    // Search for a node with the given data
    search(node, data) {
        if (node === null) return null;

        if (data < node.data) {
            return this.search(node.left, data); // Search in the left subtree
        } else if (data > node.data) {
            return this.search(node.right, data); // Search in the right subtree
        } else {
            return node; // Node found
        }
    }

    // In-order traversal (Left, Root, Right)
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Pre-order traversal (Root, Left, Right)
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Post-order traversal (Left, Right, Root)
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // Mirror the tree (swap left and right subtrees)
    mirror(root) {
        if (root === null) return root;

        const left = this.mirror(root.left);
        const right = this.mirror(root.right);

        root.left = right;
        root.right = left;

        return root;
    }
}

// Example usage
const BST = new BinarySearchTree();

// Insert nodes into the BST
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// Get the root of the tree
let root = BST.getRootNode();

// Perform traversals
console.log("In-order Traversal:");
BST.inorder(root); // Output: 5 7 9 10 13 15 17 22 25 27

console.log("Pre-order Traversal:");
BST.preorder(root); // Output: 15 10 7 5 9 13 25 22 17 27

console.log("Post-order Traversal:");
BST.postorder(root); // Output: 5 9 7 13 10 17 22 27 25 15

// Remove nodes
BST.remove(15); // Remove root node
console.log("In-order Traversal after removing 15:");
BST.inorder(BST.getRootNode()); // Output: 5 7 9 10 13 17 22 25 27

// Mirror the tree
BST.mirror(BST.getRootNode());
console.log("In-order Traversal after mirroring:");
BST.inorder(BST.getRootNode()); // Output: 27 25 22 17 13 10 9 7 5