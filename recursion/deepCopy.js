function cloneDeep(value) {
    const type = typeof value;
    if (Array.isArray(value)) {
        return value.map((item) => {
            return cloneDeep(item);
        });
    }

    if (type === 'object' && value !== null) {
        const obj = {};
        for (const key in value) {
            obj[key] = cloneDeep(value[key]);
        }
        return obj;
    }
    return value;
}

const deepObj = {
    a: [1, 2, 3, { z: 1 }, "10"],
    b: {
        c: [90, 80]
    },
    c: 10,
    d: "30"
}
let clonedCopy = cloneDeep(deepObj);
deepObj.a[3].z = 3;
console.log(clonedCopy);
console.log(deepObj);