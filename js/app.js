// TOGGLE FUNCTIONALITY
const toggleButton = document.querySelector('.toggle');
const navbar = document.querySelector('.sidenav-menu');

toggleButton.addEventListener('click', showNavbar);

function showNavbar() {
    if (navbar.style.visibility === "hidden") {
        navbar.style.visibility = "visible";
    } else {
        navbar.style.visibility = "hidden";
    }
}
// END OF TOGGLE FUNCTIONALITY

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