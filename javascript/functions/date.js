let day = currentDate.getFullDay();
let year = currentDate.getFullYear();
let month = currentDate.getFullMonth();

function date (day, year, month){
    return (`Today is ${day} the ${month} and ${year}`); 
}

console.log((date));