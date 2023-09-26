function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] +  arr[10];
    }
    getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

// The problematic line is: is line 2 were not all the elements are at the same line.
// JS linter.    
// indexes in an array start from 0 so to get even cells we need to start from arr[1] and add two every time to the index to stay in even cell this also causes a problem when calling arr[10].