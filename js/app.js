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