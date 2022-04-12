//Box => Cursor

const box = document.querySelector(".box");
document.addEventListener("mousemove", e => {
    box.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
});