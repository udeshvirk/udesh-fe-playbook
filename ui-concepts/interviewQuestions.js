/*
 * A collection of common interview questions and their solutions.
 * Topics include linked lists, binary search trees, graph algorithms, and array operations.
 */

// 1. Reverse Linked List
const reverseList = (head) => {
    let current = head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next; // Save the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev forward
        current = next; // Move current forward
    }

    return prev; // New head of the reversed list
};

// 2. Delete Node from BST
function removeNode(node, key) {
    if (node === null) return null; // Tree is empty

    if (key < node.data) {
        node.left = removeNode(node.left, key); // Move to the left subtree
        return node;
    } else if (key > node.data) {
        node.right = removeNode(node.right, key); // Move to the right subtree
        return node;
    } else {
        // Node to be deleted found
        if (node.left === null && node.right === null) {
            // Node with no children
            return null;
        } else if (node.left === null) {
            // Node with one child (right)
            return node.right;
        } else if (node.right === null) {
            // Node with one child (left)
            return node.left;
        } else {
            // Node with two children
            const aux = findMinNode(node.right); // Find the minimum node in the right subtree
            node.data = aux.data; // Replace data
            node.right = removeNode(node.right, aux.data); // Remove the duplicate node
            return node;
        }
    }
}

// Helper function to find the minimum node in a BST
function findMinNode(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// 3. Detect a Cycle in a Linked List
const hasCycle = (head) => {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow && fast) {
        if (slow === fast) return true; // Cycle detected
        slow = slow.next;
        if (!fast.next) return false;
        fast = fast.next.next;
    }

    return false; // No cycle
};

// 4. Check if a Tree is a Binary Search Tree
const isValidBST = (root) => {
    return validateBST(root, null, null);
};

const validateBST = (root, min, max) => {
    if (root === null) return true;

    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;

    return validateBST(root.left, min, root.val) && validateBST(root.right, root.val, max);
};

// 5. Filter Unique Elements in an Array
const filterUnique = (arr) => {
    const set = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (set.has(item)) {
            duplicates.add(item);
        } else {
            set.add(item);
        }
    }

    return [...set].filter((item) => !duplicates.has(item));
};

// 6. Right View of a Binary Search Tree
const rightSideView = (root) => {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const next = [];
        result.push(queue[queue.length - 1].val); // Add the rightmost node

        for (const node of queue) {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }

        queue.splice(0, queue.length, ...next);
    }

    return result;
};

// 7. Left View of a Binary Search Tree
const leftSideView = (root) => {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const next = [];
        result.push(queue[0].val); // Add the leftmost node

        for (const node of queue) {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }

        queue.splice(0, queue.length, ...next);
    }

    return result;
};

// 8. Graph Search Algorithm to Group Nodes
const groupNodes = (graph) => {
    const visited = new Set();
    const groups = [];

    const dfs = (node, group) => {
        if (visited.has(node)) return;
        visited.add(node);
        group.push(node);

        for (const neighbor of graph[node]) {
            dfs(neighbor, group);
        }
    };

    for (const node in graph) {
        if (!visited.has(node)) {
            const group = [];
            dfs(node, group);
            groups.push(group);
        }
    }

    return groups;
};