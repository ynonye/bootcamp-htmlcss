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


// -------------------- car agency by its Id -------------------

// function searchForCarAgencyById(agencyId) {
//     for (const agency of carMarket.sellers) {
//         if (agencyId === agency.agencyId) {
//             return agency;
//         }
//     }
//     return `Agency not found!`;
// }


// ------------------ Retrieve all agencies by it's name ----------------------

// function retrieveAgenciesName() {
//     const agenciesNamesArray = [];
//     for (const agency of carMarket.sellers) {
//         agenciesNamesArray.push(agency.agencyName);
//     }
//     return agenciesNamesArray;
// }

// console.log(retrieveAgenciesName());

// ----------------- Add a new car to an agency's inventory ----------------- 

//function addCarToAgencyInventory(agencyName, brand, car) {
//    for (const agency of carMarket.sellers) {
//        if (agencyName === agency.agencyName) {
//            for (const currBrand of agency.cars) {
//                if (brand == currBrand.brand) {
//                    currBrand.models.push(car);
//                    return "Car Added to Inventory";
//                }
//            }
//        }
//    }
//    return "Agency not found!";
//}

//  Test
//
// const newCar = { name: "e-tron", year: 2021, price: 80000, ownerId: "FQvNsEwXY" };
// console.log(addCarToAgencyInventory("Best Deal", "audi", newCar));



//carMarket.getCarAndBrand = function (agencyName,carNumber){
//    const car ={}
//    let brand = ''
//    for (const agency of carMarket.sellers) {
//        if (agencyName === agency.agencyName) {
//            for (const currBrand of agency.cars) {
//                for (let i = 0; i < currBrand.models.length; i++) {
//                    if (curBrand.models[i].carNumber === carNumber) {
//                        brand = curBrand.brand;
//                        car = curBrand.models[i];
//                        return [brand,car];
//                
//                    }
//                }
//            }
//        }
//    }
//    return -1;
//}

// ---------------- Remove a car from an agency's inventory. ---------------- 

//function removeCarFromAgencyInventory(agencyName, carNumber) {
//    for (const agency of carMarket.sellers) {
//        if (agencyName === agency.agencyName) {
//            for (const currBrand of agency.cars) {
//                for (let i = 0; i < currBrand.models.length; i++) {
//                    if (currBrand.models[i].carNumber === carNumber) {
//                        currBrand.models.splice(i, 1);
//                        return "car removed from Inventory";
//                    }
//                }
//            }
//        }
//    }
//    return "Agency or Car Number not found!";
//}

// ---------------------- Change the cash or credit of an agency

// function changeCash(agencyName, newCash) {
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             agency.cash = newCash;
//             return `Cash changed Successfully`;
//         }
//     }
//     return "Agency not found!";
// }

// console.log(changeCash("Car Werks", 9000000));

/* ---------------------- Change the cash of an agency. --------------------- */

// function changeCredit(agencyName, newCredit) {
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             console.log(agency.credit);
//             agency.credit = newCredit;
//             console.log(agency.credit);

//             return `Credit changed Successfully`;
//         }
//     }
//     return `Agency not found!`;
// }




// ------------- Update the price of a specific car in an agency ------------

// carMarket.updateCarPrice = function (agencyName, carNumber, newPrice) {
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             for (const currBrand of agency.cars) {
//                 for (let i = 0; i < currBrand.models.length; i++) {
//                     if (currBrand.models[i].carNumber === carNumber) {
//                         currBrand.models[i].price = newPrice;
//                         return `Car Price changed Successfully`;
//                     }
//                 }
//             }
//         }
//     }
//     return "Agency or CarNumber not found!";
// };

// carMarket.updateCarPrice("CarMax","4Ixb0",180000)


// ------ Calculate and return the total revenue for a specific agency ------

// carMarket.getTotalAgencyRevenue = function (agencyName) {
//     let totalRevenue = 0;
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             for (const currBrand of agency.cars) {
//                 for (let i = 0; i < currBrand.models.length; i++) {
//                     totalRevenue += currBrand.models[i].price;
//                 }
//             }
//         }
//     }
//     return `The Total revenue of ${agencyName} Agency is : ${totalRevenue}`;
// };

// console.log(carMarket.getTotalAgencyRevenue("LanaEdge"));



// ---------------- Transfer a car from one agency to another --------------

//carMarket.transferCarBetweenAgencies = function (fromAgency,toAgency, carNumber) {
//    
//    addCarToAgencyInventory(toAgency,brand,car);
//    removeCarFromAgencyInventory(fromAgency,brand,car)
//};

