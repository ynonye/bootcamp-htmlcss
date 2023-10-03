const ageInput = document.querySelector('#age');

const checkAge = document.getElementById('check-age');

checkAge.addEventListener('click',function(){
    const age = parseInt(ageInput.value);
    if (age > 18 ){
        alert("you can drink")
    }
    else{
        alert("you are too young")
    }
})