## 🔒 **Closures (4–5 problems)**

### 🧠 1. **Loop with `var` and closure**

```js
function createFunctions() {
  var result = [];
  for (var i = 0; i < 5; i++) {
    result.push(function () {
      return i;
    });
  }
  return result;
}
const funcs = createFunctions();
console.log(funcs[0]()); // ?
```

**Answer:** `5`  
**Why?** All functions share the same reference to `i`. When they run, the loop is over and `i === 5`.

✅ **Fix using closure**:

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    result.push(function () {
      return j;
    });
  })(i);
}
```

---

### 🧠 2. **Closure inside setTimeout**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
```

**Answer:**  
`3  
3  
3`

✅ **Fix using `let`**:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
```

---

### 🧠 3. **Data Privacy with Closures**

```js
function Counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}
const c = Counter();
console.log(c.increment()); // 1
console.log(c.value()); // 1
console.log(c.decrement()); // 0
```

**Answer:** Works as expected.  
**Why?** Closure keeps `count` private — not accessible outside.

---

### 🧠 4. **Closure Tricky Access**

```js
const outer = () => {
  let secret = "🧙";
  return function inner() {
    return secret;
  };
};
const fn = outer();
secret = "🕵️"; // Global variable
console.log(fn()); // ?
```

**Answer:** `'🧙'`  
**Why?** Closure captures lexical scope — not runtime variables.

---

### 🧠 5. **Closures in Object Methods**

```js
function makePerson(name) {
  return {
    getName: function () {
      return name;
    },
    setName: function (newName) {
      name = newName;
    },
  };
}
const p = makePerson("Udesh");
p.setName("Neo");
console.log(p.getName()); // ?
```

**Answer:** `'Neo'`  
**Why?** Object methods still have access to `name` via closure.

---

## 🏹 **Arrow Functions (4–5 problems)**

### 🧠 1. **Arrow Function and `this`**

```js
const obj = {
  value: 42,
  getValue: () => this.value,
};
console.log(obj.getValue()); // ?
```

**Answer:** `undefined`  
**Why?** Arrow functions don’t bind their own `this`, it’s inherited from where they are defined — in global scope.

---

### 🧠 2. **Arrow Function in setTimeout**

```js
const user = {
  name: "Udesh",
  greet: function () {
    setTimeout(() => {
      console.log(`Hi, I'm ${this.name}`);
    }, 100);
  },
};
user.greet(); // ?
```

**Answer:** `"Hi, I'm Udesh"`  
**Why?** Arrow functions retain the `this` context of `greet()`.

---

### 🧠 3. **Arrow vs Function in Object**

```js
const person = {
  name: "Alex",
  sayName: function () {
    return this.name;
  },
  sayNameArrow: () => this.name,
};
console.log(person.sayName()); // 'Alex'
console.log(person.sayNameArrow()); // ?
```

**Answer:** `undefined`  
**Why?** Arrow function `this` refers to the outer/global scope.

---

### 🧠 4. **Constructor with Arrow Function**

```js
const Human = (name) => {
  this.name = name;
};
const h = new Human("Neo"); // ?
```

**Answer:** ❌ **TypeError: Human is not a constructor**  
**Why?** Arrow functions can’t be used as constructors.

---

### 🧠 5. **Arrow Function Arguments**

```js
const test = () => {
  console.log(arguments);
};
test(1, 2, 3); // ?
```

**Answer:** ❌ `ReferenceError: arguments is not defined`  
**Why?** Arrow functions don’t have their own `arguments` object.

---

## 🧬 **Prototype & Inheritance (4–5 problems)**

### 🧠 1. **Prototype Chain**

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

const p = new Person("Udesh");
console.log(p.greet()); // ?
```

**Answer:** `"Hello, I'm Udesh"`  
**Why?** `greet` is accessed via the prototype chain.

---

### 🧠 2. **Overriding Prototype Method**

```js
function Animal() {}
Animal.prototype.sound = () => "generic sound";

const dog = new Animal();
dog.sound = () => "woof";

console.log(dog.sound()); // ?
```

**Answer:** `'woof'`  
**Why?** Instance method overrides prototype method.

---

### 🧠 3. **Prototype Inheritance**

```js
function A() {}
A.prototype.sayHi = function () {
  return "Hi from A";
};

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const b = new B();
console.log(b.sayHi()); // ?
```

**Answer:** `'Hi from A'`  
**Why?** B inherits from A via prototype chain.

---

### 🧠 4. **Prototype Confusion**

```js
function Foo() {}
Foo.prototype = { a: 1 };

const f1 = new Foo();
Foo.prototype = { a: 2 };

const f2 = new Foo();
console.log(f1.a); // ?
console.log(f2.a); // ?
```

**Answer:**  
`1  
2`

**Why?** `f1` and `f2` refer to different prototype objects at creation time.

---

### 🧠 5. **Function.prototype vs **proto\*\*\*\*

```js
function A() {}
const a = new A();

console.log(a.__proto__ === A.prototype); // ?
console.log(A.__proto__ === Function.prototype); // ?
```

**Answer:**  
`true  true`

**Why?**

- All instances’ `__proto__` points to their constructor’s `.prototype`.
- All functions inherit from `Function.prototype`.
