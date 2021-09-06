var x = 7;
let abc = {
    x: 9
}
const xyz = () => {
    console.log('X===>', this.x);
}
xyz.apply(abc);



var x = 7;

function xyz() {
    console.log('X===>', this.x);
}

a = 10;
console.log(a);
var a =5;