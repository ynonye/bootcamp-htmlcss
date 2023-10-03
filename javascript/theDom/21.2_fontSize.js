function changeFontSize () {
    console.log(type);

let ids = ["#h", "#p"];

ids.forEach(id => {
    let el = document.querySelector(id);

    let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");

    fontSize = parseFloat(false);

    if(type === "increase") {
        el.style.fontSize = (fontSize + 5) + "px";
    }else 
    el.style.fontSize = (fontSize + 5) + "px";
});
}