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



// KEY = LGNNzkt9PalnCE4qzQGGT3zhtYSsGC7f
// key = AIzaSyBvgMBsqW2rRHifS56-H-czPz2lBfqbRgc


// fetching the data
window.addEventListener('load', loadPost);

function loadPost() {
    fetch(' https://rapidapi.p.rapidapi.com/v1/sources')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = '<h1>Posts</h1>'
            data.forEach((video) => {
                output += `
                <div>
                <h2>${video.title}</h2>
                <p>${video.author}</p>
                </div>
                `;
            })
        })
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
                   <img src="/img/bg1.jpeg" alt="world news" style="max-width: 100%;">
                    <h3>The world news</h3>
                    <p class="post-contents">
                        Imagine being able to confidently go after any project that catches your eye, knowing you’ll have an excellent chance of landing a new client.
                    </p>
                    <div class="post-icons">
                        <div class="counts">
                            <i class="far fa-heart"></i>
                            <p>23</p>
                        </div>
                        <div class="counts">
                            <i class="far fa-thumbs-down"></i>
                            <p>30</p>
                        </div>
                    </div>
 `;
    postContainer.appendChild(post);
}