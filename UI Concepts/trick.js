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

/////////////////////////////////////////
console.log(1);
setTimeout(()=>{console.log(2)});
console.log(3);
Promise.resolve(4).then((val)=>{console.log(val)});
console.log(5);