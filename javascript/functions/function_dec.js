const worldPopulation = 7900;

function percentageOfWorld1 (population) {
    let prec =  (population / worldPopulation);    
    return prec;   
    
}

let usaPopulation = percentageOfWorld1(340).toFixed(1);
let argentinaPopulation = percentageOfWorld1(189).toFixed(1);
let japanPopulation = percentageOfWorld1(125).toFixed(1); 


console.log(`USA's population compared to the whole world is ${usaPopulation}%`);
console.log(`Argentina population compared to the world is ${argentinaPopulation}`);
console.log(`Japen population compared to the the world is ${japanPopulation}`);

const percentageOfWorld2 = (population) => (population/worldPopulation) * 100;

let usaPopulation1 = percentageOfWorld2(340).toFixed(1);
let argentinaPopulation1 = percentageOfWorld2(189).toFixed(1);
let japanPopulation1 = percentageOfWorld2(125).toFixed(1);

console.log(`USA's population compared to the whole world is ${usaPopulation1}%`);
console.log(`Argentina's population compared to the whole world is ${argentinaPopulation1}%`);
console.log(`Japan's population compared to the whole world is ${japanPopulation1}%`);
