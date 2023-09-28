const numsArray = [2, 30, 28, 55, 12, 26, 38, 155];

let max = numsArray.reduce(
    (maxValue, currValue) => Math.max(maxValue, currValue), -Infinity);

console.log('The reduce max answer:', max);


let sum = numsArray.reduce((currSum, currVal) => currSum + currVal, 0);

console.log('The reduce sum is:',sum);

let avg = numsArray.reduce(
    (currAvg, currVal) => currAvg + currVal / numsArray.length, 0);

console.log('The reduce avarage is:',avg);

console.log('The normal avrage',sum/numsArr.length);


