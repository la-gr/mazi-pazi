let leftBut = document.getElementById("left");
let rightBut = document.getElementById("right");
let info = document.getElementById("info");
let about = document.getElementById("about");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let lil1 = document.getElementById("lil1");
let lil2 = document.getElementById("lil2");
let lil3 = document.getElementById("lil3");
//determining whether user chose grooming or sitting
const selection = sessionStorage.getItem("selection");
if (selection === "groom") {
    //description of the service selected
    about.innerHTML = "GROOMING";
    info.innerHTML = "this is a description for the grooming service that this business provides wow wow i don't know what to put here there are a lot of things that could be said";
    //setting the images to dog grooming pictures
    img1.src = "dogGR.png";
    img2.src = "dog2.png";
    img3.src = "dog3.png";
    lil1.src = "dogGR.png";
    lil2.src = "dog2.png";
    lil3.src = "dog3.png";
} else if (selection === "sit") {
    //description of the service selected
    about.innerHTML = "SITTING";
    info.innerHTML = "this is a description for the sitting service that this business provides wow wow i don't know what to put here there are a lot of things that could be said";
    //setting the images to dog sitting images
    img1.src = "area1.png";
    img2.src = "area2.png";
    img3.src = "area3.png";
    lil1.src = "area1.png";
    lil2.src = "area2.png";
    lil3.src = "area3.png";
}

//slides images from one to another
function scrollToImage(index) {
    const container = document.querySelector('.dog');
    const width = container.offsetWidth;
    container.scrollTo({
        left: index * width,
        behavior: 'smooth'
    });
}