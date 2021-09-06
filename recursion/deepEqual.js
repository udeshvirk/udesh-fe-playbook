function deepEqual(a, b) {
    if ((typeof a == 'object' && a != null) &&
        (typeof b == 'object' && b != null)) {
        if (Object.keys(a).length !== Object.keys(b).length) { return false; }
        for (const key in a) {
            if (!(key in b) || !deepEqual(a[key], b[key])) { return false; }
        }
        for (const key in b) {
            if (!(key in a) || !deepEqual(b[key], a[key])) { return false; }
        }
        return true;
    }
    else {
        return a === b;
    }
}

const deepObj = {
    a: [1, 2, 3, { z: 1 }, "10"],
    b: {
        c: [90, 80]
    },
    c: 10,
    d: "30"
}

const deepObj2 = {
    a: [1, 2, 3, { z: 1 }, "10"],
    b: {
        c: [90, 80]
    },
    c: 10,
    d: "30"
}

const deepObj3 = {
    a: [1, 2, 3, { z: 3 }, "10"],
    b: {
        c: [90, 80]
    },
    c: 10,
    d: "30"
}

const deepObj4 = {
    a: [1, 2, 3, { z: 1 }, 10],
    b: {
        c: [90, 80]
    },
    c: 10,
    d: "30"
}

console.log(deepEqual(deepObj, deepObj2));  // true
console.log(deepEqual(deepObj, deepObj3));  // false
console.log(deepEqual(deepObj2, deepObj3)); // false
console.log(deepEqual(deepObj, deepObj4));  // false