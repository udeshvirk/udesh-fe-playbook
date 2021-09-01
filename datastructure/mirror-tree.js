class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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
}



// create new tree
function mirrorTree(root) {
    let mirror = null, left, right;
    if (root === null) {
        return root;
    }
    if (root !== null) {
        mirror = new TreeNode(root.val);
    }
    if (root.left !== null) {
        left = mirrorTree(root.left);
    }
    if (root.right !== null) {
        right = mirrorTree(root.right);
    }
    mirror.right = left;
    mirror.left = right;
    return mirror;
}


// modify same tree
function mirrorTree2(root) {
    if (root === null) {
        return root;
    }
    let left, right;
    if (root.left !== null) {
        left = mirrorTree2(root.left);
    }
    if (root.right !== null) {
        right = mirrorTree2(root.right);
    }
    root.right = left;
    root.left = right;
    return root;
}

//mirror alternate level
function alternateMirrorTree(root, reverse = true) {
    if (root === null) {
        return root;
    }
    let left, right;
    if (root.left !== null) {
        left = alternateMirrorTree(root.left, !reverse);
    }
    if (root.right !== null) {
        right = alternateMirrorTree(root.right, !reverse);
    }
    if (reverse) {
        root.right = left;
        root.left = right;
    } else {
        root.left = left;
        root.right = right;
    }
    return root;
}

console.log(tree);
console.log(mirrorTree(tree));

