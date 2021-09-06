// [8:04 pm] Yaseer Ahmed
    

// 1.Reverse Linked List

const reverseList = head => {​​​​​​​​
  let current = head
  let prev = null
  let next = null
  while (current) {​​​​​​​​
    next = current.next
    current.next = prev
    prev = current
    current = next
  }​​​​​​​​
  return prev
}​​​​​​​​



	
// Delete Node from BST


function removeNode(node, key) {​​​​​​​​
        // if the root is null then tree is  
        // empty 
        if (node === null)
            return null;
        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if (key < node.data) {​​​​​​​​
            node.left = this.removeNode(node.left, key);
            return node;
        }​​​​​​​​
        // if data to be delete is greater than  
        // roots data then move to right subtree 
        else if (key > node.data) {​​​​​​​​
            node.right = this.removeNode(node.right, key);
            return node;
        }​​​​​​​​
        // if data is similar to the root's data  
        // then delete this node 
        else {​​​​​​​​
            // deleting node with no children 
            if (node.left === null && node.right === null) {​​​​​​​​
                node = null;
                return node;
            }​​​​​​​​
            // deleting node with one children 
            if (node.left === null) {​​​​​​​​
                node = node.right;
                return node;
            }​​​​​​​​
            else if (node.right === null) {​​​​​​​​
                node = node.left;
                return node;
            }​​​​​​​​
            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }​​​​​​​​
    }​​​​​​​​




	
// Detect a cycle in a linked list and if present return the node from where cycle starts - this i think we saw in leet code


var hasCycle = function(head) {​​​​​​​​
   if(!head || !head.next) return false; 
   let slow = head;
   let fast = head.next;
   while(slow && fast) {​​​​​​​​
       if(slow === fast) return true;
       slow = slow.next;
       if(!fast.next) return false;
       fast = fast.next.next;   
   }​​​​​​​​ 
   return false;
}​​​​​​​​;



	
	
// Print the left view of tree.
	
	
	
// check whether a given tree is a binary search tree or not.
	


var isValidBST = function(root) {​​​​​​​​
    return validateBST(root, null, null);    
}​​​​​​​​;
var validateBST = function(root, min, max) {​​​​​​​​
    if (root === null) {​​​​​​​​
      return true;
    }​​​​​​​​
    
    if (min !== null && root.val <= min) {​​​​​​​​
        return false;
    }​​​​​​​​
    
    if (max !== null && root.val >= max) {​​​​​​​​
        return false;
    }​​​​​​​​
    
    if (!validateBST(root.left, min, root.val) || !validateBST(root.right, root.val, max)) {​​​​​​​​
        return false;
    }​​​​​​​​
    
    return true;
}​​​​​​​​;



	
// Graph search algorithm and code to segregate provided nodes in 7. groups, nodes in a group should be directly linked to each other. Solution needs to be optimised for space and time complexities.




	
// Filter Unique in an array


filterUnique() {​​​​​​​​
        let set = new Set();
        let curr = this.head
        let result = [];
        let duplicates = [];
        //Loop the list
        while (curr) {​​​​​​​​
            let elm = curr.value;
            result = result.concat(elm);
            if (set.has(elm)) {​​​​​​​​
                duplicates = duplicates.concat(elm)
            }​​​​​​​​ else {​​​​​​​​
                set.add(elm);
            }​​​​​​​​
            curr = curr.next;
        }​​​​​​​​
        return result.filter(i => {​​​​​​​​
            if (!duplicates.includes(i)) {​​​​​​​​
                return i;
            }​​​​​​​​
        }​​​​​​​​);
    }​​​​​​​​




	
// Right view of a BST:


var rightSideView = function(root) {​​​​​​​​
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    function pre(node, h) {​​​​​​​​
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }​​​​​​​​
}​​​​​​​​;


var rightSideView = function(root) {​​​​​​​​
    if(!root) return []
    
    let queue = [root];
    const result = [root.val]
    
    while(queue.length) {​​​​​​​​
        const next = [];
        
        for(let node of queue) {​​​​​​​​
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }​​​​​​​​
        if(next.length) result.push(next[next.length-1].val);
        queue = next;
    }​​​​​​​​
    return result;
}​​​​​​​​;




	
// Left side view of BST:


var leftSideView = function(root) {​​​​​​​​
    if (!root) return [];
    let res = [];
    post(root, 0);
    return res;
    
    function post(node, h) {​​​​​​​​
        if (!node) return;
            post(node.left, h+1); //either h+1 or h-1
            post(node.right, h+1);//either h+1 or h-1
						res[h] = node.val;
    }​​​​​​​​ 
}​​​​​​​​;




