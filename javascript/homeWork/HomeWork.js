const carMarket =  require("./obj.js");
//console.log(carMarket.sellers[0])

//  ----------search for a car agency by it's name or id-------------------------------

// function carAgency(agencyName) {
//    return carMarket['sellers'].find((seller) => {
//        // console.log(seller);
//        return seller['agencyName'] === agencyName || seller['id'] === agencyName;
//    });
//}

//console.log(carAgency('CarMax'));


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

//  Testing the function
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

// ---------------------- Change the cash or credit of an agency-----------------------

// function changeCash(agencyName, newCash) {
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             agency.cash = newCash;
//             return "Cash changed Successfully";
//         }
//     }
//     return "Agency not found";
// }

// console.log(changeCash("Car Werks", 9000000));

/* ---------------------- Change the cash of an agency. --------------------- */

// function changeCredits(agencyName, newCredit) {
//     for (const agency of carMarket.sellers) {
//         if (agencyName === agency.agencyName) {
//             console.log(agency.credit);
//             agency.credit = newCredit;
//             console.log(agency.credit);

//             return "Credit changed Successfully";
//         }
//     }
//     return "Agency not found";
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

// carMarket.updateCarPrice("The Auto World","EMW_7",540000);


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



// ---------------- Transfer a car from one agency to another ------------------

//carMarket.transferCarBetweenAgencies = function (fromAgency,toAgency, carNumber) {
//    
//    addCarToAgencyInventory(toAgency,brand,car);
//    removeCarFromAgencyInventory(fromAgency,brand,car)
//};



//----------------------Search for a customer by their name or ID --------------


// const getCustomerByNameOrId = name => {
//     return carMarket.customers.find((nameOrId) => {
//         return (nameOrId.name === name || nameOrId.id === name)
//     })
// }
//
// console.log(getCustomerByNameOrId('Lilah Goulding'))



//-------------------------Retrieve all customers' names-------------------------

// let arr = [];
// const customersNames = customers => {
//     carMarket.customers.forEach(names => {
//     arr.push({ Name : names.name })    

//     })
//     return arr;
// }

// console.log(customersNames());


//---------------------------- Change the cash of a customer-------------------------------

//let lilahCashBefore = carMarket.customers[0].cash; 
// console.log(lilahCashBefore); 
//let lilahCashAfter = carMarket.customers[0].cash = 50000;
// console.log(lilahCashAfter); 
// console.log(carMarket.customers[0]); 


//-------------- Calculate the total value of all cars owned by a specific customer--------


// let firstCarValue = carMarket.customers[1].cars[0].price
// let secondCarValue = carMarket.customers[1].cars[1].price
//const  customerCarsValue = firstCarValue + secondCarValue;
// console.log(`Cars Value : ${customerCarsValue}`)




//-------------------------------Customer Operations--------------------------------------


// ---------------------- Search for a customer by their name or ID-----------------

//function getCustomerByName(customerName) {
//    for (const currCustomer of carMarket.customers) {
//        if (currCustomer.name === customerName) {
//            return currCustomer;
//        }
//    }
//    return "customer not found";
//}

// Test:

//console.log("Testing get customer by name: ");
//let customer = getCustomerByName("Aleksander Carr");
//console.log("customer: ", customer);


//function getCustomerById(customerId) {
//    for (const currCustomer of carMarket.customers) {
//        if (currCustomer.id === customerId) {
//            return currCustomer;
//        }
//    }
//    return "customer not found";
//}




// --------------------------- Retrieve all customers' names. -----------------------------
//function getAllCustomersNames() {
//    const customersNamesArr = [];
//    for (const currCustomer of carMarket.customers) {
//        customersNamesArr.push(currCustomer.name);
//    }
//    return customersNamesArr;
//}

// Testing:

//console.log("Customers Names: ", getAllCustomersNames());


// --------------------- Change the cash of a customer. ------------------------------------

//function customerChangeCash(customerId, newCash) {
//    let customer = getCustomerById(customerId);
//    customer.cash = newCash;
//    return "cash changed";
//}

// Testing:

//console.log("customer cash before change: ", getCustomerById("F5x2tMcX4R").cash);
//customerChangeCash("5x2tMcX4R", 3000000);
//console.log("customer cash after change: ", getCustomerById("5x2tMcX4R").cash);


//-------------- Calculate the total value of all cars owned by a specific customer ------ 
//carMarket.getCustomerTotalCarValue = function (customerId) {
//    const customer = getCustomerById(customerId);
//    let totalValue = 0;
//    for (const currCar of customer.cars) {
//        totalValue += currCar.price;
//    }
//    return totalValue;
//};

// Testing
//console.log("Testing get customer total cars values: ");
//console.log("customer total cars values:", carMarket.getCustomerTotalCarValue("5x2tMcX4R"));



//----------------------------Car Purchase Operations---------------------------------------


//function sellCar(customerId, carNumber, agencyName) {
//    let agency = searchForCarAgencyByName(agencyName);
//    if (agency != "Agency not found") {
//        let car = carMarket.getCarAndBrand(agencyName, carNumber)[1];
//        let customer = getCustomerById(customerId);
//        if (car) {
//            if (customer != "customer not found") {
//                if (car.price < customer.cash) {
//                    customer.cars.push(car);
//                    customer.cash -= car.price;
//                    agency.credit += car.price;
//                    removeCarFromAgencyInventory(agency.agencyName, carNumber);
//                    carMarket.taxesAuthority.totalTaxesPaid +=
//                        (car.price * 20) / 100; // suppose tax is 20%
//                    carMarket.taxesAuthority.sumOfAllTransactions +=
//                        car.price + (car.price * 20) / 100;
//                    carMarket.taxesAuthority.numberOfTransactions++;
//
//                    return `Car was sold successfully to ${customer.name} from ${agency.agencyName} agency`;
//                } else {
//                    return "customer doesn't have enough cash";
//                }
//            } else {
//                return customer;
//            }
//        
//        return agency;
//}

// Testing

//console.log("Testing selling a car: ");
//console.log(sellCar("FQvNsEwLZ", "AZJZ4", "Carsova"));


// ------------ Calculate and return the total revenue of the entire market ----------------

//carMarket.getTotalMarketRevenue = function () {
//    let totalRevenue = 0;
//    for (const agency of this.sellers) {
//        totalRevenue += this.getTotalAgencyRevenue(agency.agencyName);
//    }
//    return totalRevenue;
//};

// Testing

//console.log("Testing get total market revenue: ");
//console.log("Total Market Revenue: $", carMarket.getTotalMarketRevenue());




