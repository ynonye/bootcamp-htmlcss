function getSum(arr1, arr2){
    const sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3][5,66,23]);

// I think that the problem here is the use of i in both of the for's.
// I have not used a specific method.  
// In this example you can't use the i n both the loops.

function getSum(arr1, arr2){
    const sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let j=0; j < arr2.length; j++){
    sum += arr2[j];
    }
    }
    getSum([1,2,3][5,66,23]);

    