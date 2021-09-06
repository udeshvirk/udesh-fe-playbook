var namer = 'global name';
var obj = {
    namer: "Andhra Pradesh",
    arrow: () => {
        console.log(this.namer)
    },
    normal: function () {
        console.log(this.namer)
    }
};
obj.arrow();
obj.normal();
obj.arrow(); // 'global name';
obj.normal(); // 'Andhra Pradesh';

function example() {
    this.namer = 'local';
    obj.arrow();  // 'local'
    obj.normal(); //'Andhra Pradesh'
}
example();