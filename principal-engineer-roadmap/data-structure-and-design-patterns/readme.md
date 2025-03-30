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

### Problem 1: Reverse an Array

```javascript
function reverseArray(arr) {
  // O(n) time and O(n) space if using new array, O(n) time in-place if swapping
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// Example:
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```

### Problem 2: Check for Balanced Parentheses

```javascript
function isBalanced(str) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let char of str) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}

// Example:
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
```

### Problem 3: Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Example:
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
```

### Problem 4: Find the Maximum Subarray Sum (Kadane's Algorithm)

```javascript
function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }
  return maxGlobal;
}

// Example:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
```

## 3. Common Design Patterns in JavaScript

### Module Pattern

- **Purpose:** Encapsulate private state and expose a public API.

```javascript
const MyModule = (function () {
  let privateVar = "I am private";

  function privateMethod() {
    return privateVar;
  }

  return {
    publicMethod: function () {
      return privateMethod();
    },
  };
})();

console.log(MyModule.publicMethod()); // "I am private"
```

### Singleton Pattern

- **Purpose:** Ensure a class has only one instance.

```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

### Observer Pattern

- **Purpose:** Allow objects (observers) to subscribe to events and be notified of changes.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello, Observers!"); // Both observers log the message.
```

### Factory Pattern

- **Purpose:** Create objects without specifying the exact class of object that will be created.

```javascript
class Car {
  constructor(model) {
    this.model = model;
  }
}

class Truck {
  constructor(model) {
    this.model = model;
  }
}

class VehicleFactory {
  createVehicle(type, model) {
    if (type === "car") {
      return new Car(model);
    } else if (type === "truck") {
      return new Truck(model);
    }
    throw new Error("Invalid vehicle type");
  }
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle("car", "Toyota");
console.log(myCar.model); // "Toyota"
```

### Strategy Pattern

- **Purpose:** Define a family of algorithms, encapsulate each one, and make them interchangeable.

```javascript
class Strategy {
  execute(a, b) {
    throw new Error("This method should be overridden");
  }
}

class AddStrategy extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

class MultiplyStrategy extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a, b) {
    return this.strategy.execute(a, b);
  }
}

const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3)); // 8

context.setStrategy(new MultiplyStrategy());
console.log(context.executeStrategy(5, 3)); // 15
```
