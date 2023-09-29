const carMarket =  require("./obj.js");
//console.log(carMarket.sellers[0])

//  search for a car agency by it's name or id.

function carAgency(agencyName) {
    return carMarket['sellers'].find((seller) => {
        // console.log(seller);
        return seller['agencyName'] === agencyName || seller['id'] === agencyName;
    });
}

console.log(carAgency('CarMax'));


function carAgency(agencyName) {
    return carMarket['sellers'].find((seller) => {
        return seller['agencyName'] === agencyName;
    });
}

console.log(carAgency('CarMax'));


function addCar(newCar) {
    
} 
