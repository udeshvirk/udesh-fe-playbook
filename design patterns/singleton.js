class Printer {
  constructor(pages) {
    this.display= function(){
      console.log(`You are connected to the printer. You want to print ${pages} pages.`)
    }
  }

  static getInstance(numOfpages){
    if(!Printer.instance){
        Printer.instance = new Printer(numOfpages);
    }
    return Printer.instance;
  }
}

var obj1 = Printer.getInstance(2)
console.log(obj1)
obj1.display()
var obj2 = Printer.getInstance(3)
console.log(obj2)
obj2.display()
console.log(obj2 == obj1)



// ===============================

class SingleTon {
    constructor() {
        if (!SingleTon.instance) {
            this.items = [];
            Object.freeze(this);
            SingleTon.instance = this;
        }
        return SingleTon.instance;
    }
    get() {
        return this.items;
    }
    push(item) {
        this.items.push(item);
    }
}

let obj1 = new SingleTon();
obj1.push(1);
obj1.push(2);
console.log('obj1 1=====>', obj1.get());
let obj2 = new SingleTon();
console.log('obj2 1=====>', obj2.get());

obj2.push(3);
console.log('obj1 2=====>', obj1.get());
console.log('obj2 2=====>', obj2.get());
console.log('comparision', obj1 === obj2);

// ===============================

function SingleTon2() {
    if (SingleTon2._instance) {
        return SingleTon2._instance;
    }
    var counter = 0;

    this.increase = function () {
        counter++;
    }
    this.showCounter = function () {
        return counter;
    }
    Object.freeze(this);
    SingleTon2._instance = this;
}

const counter = new SingleTon2();
const counter2 = new SingleTon2();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter.showCounter())
console.log(counter2.showCounter())
console.log(counter)
console.log(counter2)