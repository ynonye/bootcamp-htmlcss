//ex 1.1

//function yesNo(bool) {
//    if (bool === true)
//        return 'yes'; 
//    } else {
//        return 'no';    
//    }

//    console.log(yesNo());

//ex 2.1

//function sumOfTheLowest(a, b) {
//    return a-b; 
//}
//function sumTheLowest(array) {
//    array.sort(sumOfTheLowest);
//    return array[0] + [1];
//}
//const array = [10 , 101, 4, 3 , 8, 1, 0, 450]
//console.log(sumOfTheLowest(array));
    
// ex 2.2


//function toDecimal(v) {
//    let binary = '';
//    if(typeof v == 'string') {
//      binary = v.split();
//    } else {
//        binary = v.toString().split();
//    }
//    let decimal = 0;
//    for(let i = 0; i < binary.length; i++) {
//        decimal = (decimal * 2) + binary[i];
//    }
//    return decimal;
//  }

//ex 2.3

// function findNextSquare(number){
//     if (!(Number.isInteger(Math.sqrt(number)))){
//         return -1;
//     }else{
//         number++;
//         while(!(Number.isInteger(Math.sqrt(number)))){
//             number++;
//         }
//         return number;
//     }
// }
// console.log(findNextSquare(256));
  

//ex 2.4 

let uniq = [(1, 1, 1, 2, 1, 1)]

function findUnique(array) {
    (item) => array.indexOf(item) === array.lastIndexof(item);
}

console.log(`1For the uniq arrey, the uniq num is: ${findUnique}`);

