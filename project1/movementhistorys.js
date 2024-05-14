var elemento = document.querySelector(".historys");
var i = 0; 

function movement() {
    if (i >= 5) {
        i = 5;
        elemento.style.marginLeft = i + "px";
    } else {
        i += 100; 
    elemento.style.marginLeft = i + "px";
    }
}
function movement1() {
    i -= 100; 
    elemento.style.marginLeft = i + "px";
}
