//ex 1.1

function yesNo(bool) {
    if (bool === true)
        return 'yes'; 
    } else if (bool === false) {
        return 'no';
    }
    return `invalis argument`;
}

console.log(yesNo());