/*
Reverse a string without affecting special characters
const str1 = "a,b$c";
const str2 = "Ab,c,de!$";

console.log(reverseString(str1)); //c,b$a
console.log(reverseString(str2)); //ed,c,bA!$
https://www.geeksforgeeks.org/reverse-a-string-without-affecting-special-characters/
*/

const reverseString = (str) => {
    const temp = [];
    let reverse = '';
    const alphabetRegex = /[a-z]/i;
    for (let s of str) {
        if (alphabetRegex.test(s)) {
            temp.push(s);
        }
    }
    for (let s of str) {
        if (alphabetRegex.test(s)) {
            reverse += temp.pop();
        } else {
            reverse += s;
        }
    }
    return reverse;

}


const str1 = "a,b$c";
const str2 = "Ab,c,de!$";

console.log(reverseString(str1)); //c,b$a
console.log(reverseString(str2)); //ed,c,bA!$