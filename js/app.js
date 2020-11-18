
const bar = document.getElementById('bar');
bar.addEventListener('click', showNav);

const nav = document.getElementById('nav');

function showNav() {
    if (nav.style.visibility === "hidden") {
        nav.style.visibility = "visible";
    } else {
        nav.style.visibility = "hidden";
    }

}