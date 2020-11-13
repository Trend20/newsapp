// TOGGLE FUNCTIONALITY
const toggleButton = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', showNavbar);

function showNavbar() {
    if (navbar.style.visibility === "hidden") {
        navbar.style.visibility = "visible";
    } else {
        navbar.style.visibility = "hidden";
    }
}

const postContainer = document.getElementById('posts');