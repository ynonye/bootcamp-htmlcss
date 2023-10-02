// Block 1 : firstResult is the function otherFunction
// result is 5 because b=5 is the global variable it overrides any b outside the scope and we are calling the function inside that returns b

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}

var firstResult = someFunction(9);
console.log(firstResult);
var result = firstResult(2);
console.log(result);

// Block 2: The function b2 returns nothing and the function a() is not executed so it clogs 1
//

var a = 1;
function b2() {
    a = 10;
    return;
    function a() {}
}
b2();
console.log(a);

// Block 3:  because of the delay with set timeout the log(i) point to i in memory and is is printed after i hits i=3  

// The code output:

// 3
// 3
// 3


let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 100);
}