//Elemen => Cursor
const Elemen = document.getElementById("Elemen");

document.addEventListener("mousemove", e => {
    Elemen.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
});

// Random Color Click Elemen
function random(cal) {
    return Math.floor(Math.random() * cal);
}

document.onclick  = function () { 
randomColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
Elemen.style.background = randomColor;
}