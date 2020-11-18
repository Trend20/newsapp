
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

// select the count paragraph
const likeCount = document.querySelectorAll('.likecount');
const dislikeCount = document.querySelectorAll('.dislikecount');


// add like events
likeButton.addEventListener('click', addCount);


let counter = 0;
function addCount(){
 if(true)
 counter++;
 likeCount.values(counter);
}


// search through the page
// search input field
const searchField = document.getElementById('search');
// grab the search icon
const searcIcon = document.getElementById('search-icon');

// select the whole card
const card = document.querySelectorAll('.card');