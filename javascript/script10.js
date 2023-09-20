const remove = [3,4,4,3,6,3];

function removeDuplicates(remove) {
    return remove.filter((item, index) => remove.indexOf (item) === index);
}
console.log(removeDuplicates(remove));