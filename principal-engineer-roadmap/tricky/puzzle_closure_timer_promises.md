# 🧩 Puzzle-Style JavaScript Challenges with Closures, Timers & Promises

These are tricky problems designed to challenge your understanding of **closures**, **timing**, and **async behavior** in JavaScript.

---

## 🧠 1. Timer + Closure (What gets logged?)

```js
function mysteryLogger() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}
mysteryLogger(); // ?
```

**Answer:** `4 4 4` (after 1s, 2s, 3s)

**Why?** All arrow functions close over the same `i`. By the time they run, `i === 4`.

✅ **Fix using IIFE or `let`:**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```

---

## 🧠 2. Chained Promises

```js
Promise.resolve()
  .then(() => console.log("A"))
  .then(() => Promise.resolve("B"))
  .then(console.log)
  .then(() => console.log("C"));
```

**Answer:**

```
A
B
C
```

**Why?** Each `.then()` runs sequentially and respects returned values.

---

## 🧠 3. Delay Counter with Closures

```js
function delayCounter() {
  for (var i = 1; i <= 5; i++) {
    (function (j) {
      setTimeout(() => console.log(j), j * 100);
    })(i);
  }
}
delayCounter(); // ?
```

**Answer:**

```
1
2
3
4
5
```

**Why?** Each `j` is captured by closure via IIFE.

---

## 🧠 4. `setTimeout` in loop with Promise

```js
for (var i = 0; i < 3; i++) {
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 0)
  );
}
```

**Answer:** `3 3 3`  
**Why?** `var` leaks `i`, so all log the final value.

✅ **Fix:**

```js
for (let i = 0; i < 3; i++) {
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 0)
  );
}
```

---

## 🧠 5. Microtask vs Macrotask

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Answer:**

```
Start
End
Promise
Timeout
```

**Why?** Microtasks (`Promise.then`) are run before macrotasks (`setTimeout`).

---

## 🧠 6. Closure Async Trap

```js
function asyncTrap() {
  let value = 0;

  setTimeout(() => {
    value += 10;
    console.log("Value in timeout:", value);
  }, 1000);

  value += 5;
  console.log("Value after increment:", value);
}
asyncTrap();
```

**Answer:**

```
Value after increment: 5
Value in timeout: 15
```

**Why?** Closure keeps reference to the same `value`.

---

## 🧠 7. Delayed Greeter with Closures

```js
function greeter(name) {
  setTimeout(function () {
    console.log("Hello, " + name);
  }, 1000);
}
greeter("Udesh"); // ?
```

**Answer:**  
`Hello, Udesh`

**Why?** `name` is enclosed inside the closure of the `setTimeout` function.

---

## 🧠 8. Promise in Loop with Closure

```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    Promise.resolve().then(() => console.log(j));
  })(i);
}
```

**Answer:**

```
1
2
3
```

**Why?** Closure captures the correct value of `i` each time.

---

## Want More?

Let me know if you'd like:

- 🧠 Deep recursion & stack tricks
- 💡 Event loop edge cases
- 🎯 Real-world async race conditions
