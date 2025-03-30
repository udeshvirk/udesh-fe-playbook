# 🔥 Async/Await – Tricky JavaScript Questions

## 1. Ignored `await` in non-async function

```js
function test() {
  await Promise.resolve('hello');
  console.log('world');
}
test(); // ?
```

**❌ SyntaxError**  
**Why?** `await` can only be used inside an `async` function.

---

## 2. Await with non-promise

```js
async function test() {
  const result = await 5;
  console.log(result);
}
test();
```

**Answer:** `5`  
**Why?** `await` wraps non-promises in `Promise.resolve()` automatically.

---

## 3. Mixing `then` and `await`

```js
async function test() {
  return await Promise.resolve(42).then((v) => v * 2);
}
test().then(console.log); // ?
```

**Answer:** `84`  
**Why?** It awaits the `then`, which returns `84`.

---

## 4. `await` inside `forEach`

```js
async function test() {
  [1, 2, 3].forEach(async (n) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log(n);
  });
}
test();
```

**Answer:** `1 2 3` (but possibly out of order, and `test()` finishes before logging)

**Why?** `forEach` doesn't await async callbacks. Use `for...of` instead.

✅ **Fix:**

```js
async function test() {
  for (const n of [1, 2, 3]) {
    await new Promise((r) => setTimeout(r, 100));
    console.log(n);
  }
}
```

---

## 5. Catching rejected promises

```js
async function fail() {
  throw new Error("Oops!");
}
fail().catch((e) => console.log(e.message)); // ?
```

**Answer:** `'Oops!'`  
**Why?** Errors thrown in `async` functions are rejected promises.

---

## 6. Top-level await (Node only)

```js
const res = await Promise.resolve("hi");
console.log(res);
```

**✅ Works** in modern Node (ESM modules) or in supported browsers.

---

## 7. Async constructor?

```js
class Test {
  constructor() {
    this.data = await Promise.resolve(42);
  }
}
new Test(); // ?
```

**❌ SyntaxError**  
**Why?** You can't use `await` in constructors. Use a static factory:

```js
class Test {
  constructor(value) {
    this.data = value;
  }

  static async create() {
    const val = await Promise.resolve(42);
    return new Test(val);
  }
}
```

---

# 🎯 Real-World Closure & Promise-Based Challenges

## 1. Delay Logger (Closure + Async)

```js
function createDelayedLogger(message, delay) {
  return function () {
    setTimeout(() => {
      console.log(message);
    }, delay);
  };
}
const logHi = createDelayedLogger("Hi!", 1000);
logHi(); // logs 'Hi!' after 1s
```

---

## 2. `once` Function (Closure Utility)

```js
function once(fn) {
  let called = false,
    result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const init = once(() => console.log("Init!"));
init(); // Init!
init(); // (nothing)
```

---

## 3. Create `wait(ms)` as Promise

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function run() {
  console.log("Wait...");
  await wait(1000);
  console.log("Done");
}
run();
```

---

## 4. Retry Logic with Async

```js
async function retry(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === retries - 1) throw e;
    }
  }
}

let attempt = 0;
retry(() => {
  attempt++;
  if (attempt < 3) return Promise.reject("Fail");
  return Promise.resolve("Success");
}).then(console.log); // Success (after 2 fails)
```

---

## 5. Promise Pool (Concurrency control)

```js
function promisePool(tasks, concurrency = 2) {
  let i = 0;
  const results = [];
  const exec = async () => {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  };
  return Promise.all(Array.from({ length: concurrency }, exec)).then(
    () => results
  );
}

const sleep = (t, v) => () => new Promise((r) => setTimeout(() => r(v), t));
promisePool(
  [sleep(1000, "A"), sleep(500, "B"), sleep(300, "C"), sleep(100, "D")],
  2
).then(console.log); // ['A', 'B', 'C', 'D']
```
