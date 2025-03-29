## 1. Data Structure Concepts & Complexity

### **Core Data Structures:**

#### **1. Arrays:**

- **Concept:**  
  Ordered collections of items.

- **Time Complexity:**

  - Access: O(1)
  - Insertion/Deletion (at end): O(1)
  - Insertion/Deletion (at beginning/middle): O(n)

- **Space Complexity:**  
  O(n)

---

#### **2. Linked Lists:**

- **Concept:**  
  A sequence of nodes where each node holds data and a pointer to the next node.

- **Time Complexity:**

  - Access: O(n)
  - Insertion/Deletion at beginning: O(1)

- **Space Complexity:**  
  O(n)

---

#### **3. Stacks and Queues:**

- **Concept:**

  - **Stack:** LIFO (Last In, First Out).
  - **Queue:** FIFO (First In, First Out).

- **Operations:**
  - Push/Pop for stacks: O(1)
  - Enqueue/Dequeue for queues: O(1)

---

#### **4. Trees (e.g., Binary Trees):**

- **Concept:**  
  Hierarchical structure with nodes (parent-child relationships).

- **Time Complexity:**

  - Search, Insert, Delete in balanced trees: O(log n)

- **Space Complexity:**  
  O(n)

---

#### **5. Hash Tables (Objects/Maps in JS):**

- **Concept:**  
  Key-value pairs with near constant-time lookup.

- **Time Complexity:**

  - Insert, Lookup, Delete: O(1) (average case)

- **Space Complexity:**  
  O(n)

---

#### **6. Graphs:**

- **Concept:**  
  Nodes (vertices) connected by edges.

- **Time Complexity:**

  - Depends on traversal (e.g., O(V + E) for BFS/DFS)

- **Space Complexity:**  
  O(V + E)

---

### **Complexity Concepts:**

#### **1. Time Complexity:**

- **Definition:**  
  Describes how the runtime of an algorithm increases with the size of the input.

- **Common Notations:**  
  O(1), O(log n), O(n), O(n log n), O(n²), etc.

---

#### **2. Space Complexity:**

- **Definition:**  
  Describes the amount of memory an algorithm uses as input size grows.

---

**Understanding these concepts helps you choose the right data structure and algorithm based on performance requirements.**

---

## 2. Common Data Structure & Algorithm Problems in JavaScript

---

This section will cover practical problems and solutions using the data structures and concepts discussed above.
