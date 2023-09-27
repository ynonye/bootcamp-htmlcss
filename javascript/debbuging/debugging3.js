function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        counter++;
      }
    }
    return counter;
  }
  ;
  console.log(countOccurrences("ini mini miny moe", "n"))
  
// problem in line 5 counter + 1;
// JS REPL
// we are not changing the counter and in order to do that  we need to write counter.