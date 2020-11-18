
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

// DOM SELECTIONS
const exploreButton = document.getElementById('explore');

// like and unlike buttons

const likeButton = document.querySelectorAll('#like-button');
const dislikeButton = document.querySelectorAll('#dislike-button');


// search through the page
// search input field
const searchField = document.getElementById('search');
// grab the search icon
const searcIcon = document.getElementById('search-icon');

// select the whole card
const card = document.querySelectorAll('.card');