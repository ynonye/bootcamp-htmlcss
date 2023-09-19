let gussingNumber = Math.floor((Math.random() * 50) +1 );

let userGussing = prompt('Please enter a number');

while (gussingNumber === userGussing) {
    console.log('Congratulations you have gussed it right');
    console.log('Would you like to play agin?')
}   


