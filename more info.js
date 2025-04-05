let leftBut = document.getElementById("left");
let rightBut = document.getElementById("right");
let dogs = ["resources/dogGr.png", "resources/dog2.png", "resources/dog3.png"];
let dogsImg = document.getElementById("dogs");
let n=0;
let info = document.getElementById("info");
let about = document.getElementById("about");

//determining whether user chose grooming or sitting
const selection = sessionStorage.getItem("selection");
if (selection === "groom") {
    //description of the service selected (grooming or sitting)
    about.innerHTML = "GROOMING";
    info.innerHTML = "this is a description for the grooming service that this busiiness provides wow wow i don't know what to put here there are a lot of things that could be said";
} else if (selection === "sit") {
    about.innerHTML = "SITTING";
    info.innerHTML = "this is a description for the sitting service that this busiiness provides wow wow i don't know what to put here there are a lot of things that could be said";
}

//changes images of dogs
leftBut.addEventListener("click", (e) => {
    n--;
    if (n<0){
        n=2;
    }
    if (n>2){
        n=0;
    }
    dogsImg.src = dogs[n];

    /*
    var x = document.getElementById("hidden-social");

    x.addEventListener("animationend", function(e) {
        e.preventDefault();

        if(x.style.animationName == "slide-left") {
            x.style.display = "none";
        }
    });

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "1s slide-right";
    }
    else {
        x.style.animation = "1s slide-left";
    }
     */
})
rightBut.addEventListener("click", (e) => {
    n++;
    if (n<0){
        n=2;
    }
    if (n>2){
        n=0;
    }
    dogsImg.src = dogs[n];
})