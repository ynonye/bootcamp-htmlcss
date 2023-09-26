const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200,
}

function getCandy(candyStore,id){
    const res = candyStore.candies.find((candy)=>{
        if (candy.id === id )
        return candy;
    })   
    return res; 
}

const res = getCandy(candyStore,'as12f');
console.log(res);


function getPrice(candyStore,id){
    const res = candyStore.candies.find((candy)=>{
        return candy.id === id ;
    })
    return res.price;
}
const thePrice = getPrice(candyStore,'5hd7y');
console.log(thePrice)


function buyCandy (candyStore,id){
    const buy = candyStore.candies.find((candy)=>{
        return candy.id === id ;
    })
    buy.amount = buyCandy.amount -1;
    return candyStore.cashRefister = candyStore.cashRefister + buy.price
}

const totalCashier = buyCandy(candyStore,'5hd7y');
console.log(totalCashier)

