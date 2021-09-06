//Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.
// Example, nestedObject={ a: {b: c:{d:44}}} contains(nestedObject, 44); // true


function contains(obj, val) {
    for (const [key, value] of Object.entries(obj)) {
        if (val == value) {
            return true;
        } else {
            return contains(value, val)
        }
    }
    return false;
}

nestedObject = {
    a: {
        b: 44
    }
}


console.log(contains(nestedObject, 44))