
# 🌀 JavaScript Generator Functions

Generator functions in JavaScript are powerful and allow for pausing and resuming function execution. They are useful for lazy evaluation, custom iteration, and controlling asynchronous flows.

---

## 🔧 Syntax

```js
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## ⚡ Why Use Generator Functions?

They’re great for:

1. **Lazy evaluation** – generate values on demand.
2. **Custom iterators** – define your own iteration logic.
3. **Async control flow** – useful with redux-saga.
4. **Pausing computation** – helpful in recursive or stateful logic.

---

## 🧪 Real Use Case: Pagination over a large dataset
Imagine you're fetching thousands of records from a file or an API and want to process them in chunks:

```js
function* paginate(array, pageSize) {
  let i = 0;
  while (i < array.length) {
    yield array.slice(i, i + pageSize);
    i += pageSize;
  }
}

const bigList = Array.from({ length: 1000 }, (_, i) => i + 1);
const paginator = paginate(bigList, 100);

let page;
while (!(page = paginator.next()).done) {
  console.log('Page:', page.value);
}
```
✅ This avoids loading all 1000 items at once into memory/UI and is perfect for lazy loading.
---

## 🕹️ Custom Iterator

```js
const customRange = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};

for (const num of customRange) {
  console.log(num); // 1, 2, 3, 4, 5
}
```
You’re using a generator to implement a custom iterable object!

---

## 🤖 Redux-Saga Example
If you ever use redux-saga, it relies heavily on generators to handle asynchronous side effects like API calls:

```js
function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUser, action.payload.id);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}
```
This looks synchronous but works asynchronously — yield is like await here, but in generator-land.

---

## 🚧 Notes

- `.next(value)` can **send values into** the generator.
- `yield*` delegates to another generator or iterable.
- Not async by default, but integrates well with async workflows.

---

## 📌 TL;DR

| Feature | Description |
|--------|-------------|
| `function*` | Declares a generator function |
| `yield` | Pauses function execution, returns a value |
| `.next()` | Resumes execution, can send values into the generator |
| Use Cases | Lazy loading, custom iterators, async control |

