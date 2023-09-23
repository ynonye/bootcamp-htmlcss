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

//let uniq = [(1, 1, 1, 2, 1, 1)]

//function findUnique(array) {
//    (item) => array.indexOf(item) === array.lastIndexof(item);
//}

//console.log(`For the uniq arrey, the uniq num is: ${findUnique}`);

//ex. 2.5

//function numberSum (num) {
//    let total = 0;
//        for (let i = 1, i <= number ={; i ++} ) {
//            total += 1
//        } 
//        return total;
//}        

//console.log(numberSum());

//ex 2.6 

//function centuryFromYear(year) {
//    let centuryCount = 0;
//    while (year > 0){
//      year = year - 100;
//      centuryCount = centuryCount + 1;
//   }
//    return centuryCount;
//  }

//console.log(centuryFromYear(1688));  


 //ex 2.7

//function basicMath (operation, value1, value2) {
//    switch (operation) {
//        case '*':
//            return value1 * value2;
//        case '/':
//            return value1 / value2;
//        case '+':
//            return value1 + value2;
//        case '-':
//            return value1 * value2;
//        default:
//            console.log('Operation is not valid');                
//    }       return null;
//}

//console.log(basicMath("*", 3, 5));
//console.log(basicMath("/", 20, 4));
//console.log(basicMath("+", 7, 6));
//console.log(basicMath("-", 15, 3));


// ex 4.1

//function fib(n) {
//    let firstNum = 0;
//    let secondNum = 1;
//    for (let i = 1; i < n; i++) {
//        let tempSecondNum = secondNum;
//        secondNum += firstNum;
//        firstNum = tempSecondNum
//    }
//    return secondNum;
//}
//
//console.log(fib(5));

//ex 5.1

//function trimmingString (str) {
//    let starArr = str.split("");
//    starArr.pop();
//    starArr.shift();
//    let newStr = starArr.join("");
//    return newStr;
//}

//console.log(trimmingString("What's up"))


// ex 5.2 

//function repeatString(count, str) {
//    let newString = '';
//    for (let i = 0; i < count; i++) {
//        newstr += str;
//    }
//    return newstr;
//    }

//console.log(repeatString(8, 'H'));    


// ex 5.3

//function toCamelCase (str) {
//    const arr = str.split("-");
//        for (let i = 1; 1 < arr.lengh; i++) {
//            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//        }
//        let newString = arr.join("");
//        return newString;
//    }

//console.log(toCamelCase('the-king-slayer'));


//ex 5.5

//function abbreviateTwoWords(word1, word2) {
//    return `${word1.charAt(0).toUpperCase()}.${word2.charAt(0).toUpperCase()}`;
//}
//
//console.log(abbreviateTwoWords("Donlad", "Trump"));


//ex 5.6

//function maskify(str) {
//    let newString = "";
//    for (let i = 0; i < str.length; i ++)
//        if (i >= str.length -4) {
//            newString += str[1];
//        }else {
//            newString += '#';
//        }
//    }
//    return newString;

//console.log(maskify("123456789"));    


//ex 5.7

// function lengthOfShortestWord(str) {
//   const wordsArr = str.split(" ");
//   let minLength = wordsArr[0].length;
//   for (let i = 1; i < wordsArr.length; i++) {
//     if (wordsArr[i].length < minLength) {
//       minLength = wordsArr[i].length;
//     }
//   }
//   return minLength;
 //}

//console.log(lengthOfShortestWord('This is for your testing'));


//ex 6.1

// function accum(str) {
//   let newString = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     newString += "-";
//     for (let j = 0; j <= i; j++) {
//       if (j == 0) {
//         newString += str[i].toUpperCase();
//       } else {
//         newString += str[i].toLowerCase();
//       }
//     }
//   }
//   return newString;
// }

//console.log(accum("abcd"));


//ex 6.2

 function countDuplicates(str) {
   const duplicates = {};
   for (let i = 0; i < str.length; i++) {
     let count = 0;
     let currentChar = str[i].toLowerCase();
     for (let k = i; k < str.length; k++) {
       if (str[j].toLowerCase() == currentChar) {
         count++;
       }
     }
     if (count >= 2 && !(currentChar in duplicates)) {
       duplicates[currentChar] = count;
     }
   }
   if (Object.keys(duplicates).length == 0) {
     return `no character repeats more than once`;
   } else {
     return duplicates;
   }
}

console.log(countDuplicates("ABBA"));

// ex. 6.3


 function isIsogram(str) {
   const duplicates = {};
   for (let i = 0; i < str.length; i++) {
     let count = 0;
     let currentChar = str[i].toLowerCase();
     for (let j = i; j < str.length; j++) {
       if (str[j].toLowerCase() == currentChar) {
         count++;
       }
     }
     if (count >= 2 && !(currentChar in duplicates)) {
       duplicates[currentChar] = count;
     }
   }
   if (Object.keys(duplicates).length == 0) {
     return true;
   } else {
     return false;
   }
}

console.log(countDuplicates("aA11"));