// Block 1 - it will print 1, undefind, 2.
//  It has returned undefined, 2.

//block 2 - The outcome of the code is nothing. 

//var fullName = 'John Doe';
//var obj = {
//    fullName: 'Colin Ihrig',
//    prop: {
//        fullName: 'Aurelio De Rosa',
//        getFullName: function () {
//        return this.fullName;
//        }
//    }
//};
//console.log(obj.prop.getFullName());
//var test = obj.prop.getFullName;
//console.log(test());

// Block 3:  It will return an undefined and a number.  

//function funcB() {
//    let a = 0;
//    let b = 0;
//    a++;
//    return a;
//    }
//function funcA() {
//    console.log(typeof a);
//    console.log(typeof b);
//}    

// Block 4:  It dosn't print anything.
//function funcC() {
//    console.log("1");
//    console.log("2");
//    }
//funcC();     

//Block 5: e is not defined. 
//function funcD1() {
//    d = 1;
//    }
//    funcD1();
//    console.log(d);
//    function funcD2() {
//    var e = 1;
//    }
//    funcD2();
//    console.log(e);    

// Block 6  - It will print 1. / It didn't printed anything.  
//function funcE() {
//    console.log("Value of f in local scope: ", f);
//    }
//    console.log("Value of f in global scope: ", f);
//    var f = 1;
//    funcE();    