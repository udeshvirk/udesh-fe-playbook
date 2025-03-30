// TreeNode class definition
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Sample tree structure
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: {
                val: 8,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

// Function to create a mirrored copy of the tree
function mirrorTree(root) {
    if (root === null) {
        return null; // Base case: if the node is null, return null
    }

    // Create a new mirrored node
    const mirror = new TreeNode(root.val);

    // Recursively mirror the left and right subtrees
    mirror.left = mirrorTree(root.right);
    mirror.right = mirrorTree(root.left);

    return mirror; // Return the mirrored node
}

// Function to modify the same tree to its mirror
function mirrorTree2(root) {
    if (root === null) {
        return null; // Base case: if the node is null, return null
    }

    // Recursively mirror the left and right subtrees
    const left = mirrorTree2(root.left);
    const right = mirrorTree2(root.right);

    // Swap the left and right subtrees
    root.left = right;
    root.right = left;

    return root; // Return the modified root
}

// Function to mirror alternate levels of the tree
function alternateMirrorTree(root, reverse = true) {
    if (root === null) {
        return null; // Base case: if the node is null, return null
    }

    // Recursively process the left and right subtrees
    const left = alternateMirrorTree(root.left, !reverse);
    const right = alternateMirrorTree(root.right, !reverse);

    // Swap the left and right subtrees only on alternate levels
    if (reverse) {
        root.left = right;
        root.right = left;
    } else {
        root.left = left;
        root.right = right;
    }

    return root; // Return the modified root
}

// Test the functions
console.log("Original Tree:", tree);
console.log("Mirrored Tree (New Tree):", mirrorTree(tree));
console.log("Mirrored Tree (In-Place):", mirrorTree2(tree));
console.log("Alternate Level Mirrored Tree:", alternateMirrorTree(tree));