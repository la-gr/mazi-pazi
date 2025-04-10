let bookGr = document.getElementById("grb");
let bookSit = document.getElementById("sb");
let moreGr = document.getElementById("grm");
let moreSit = document.getElementById("sm");

//resets the form with message sending when the page is reloaded
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

//more info
moreGr.addEventListener("click", (e) => {
    window.location.href = "more info.html";
    sessionStorage.setItem("selection", "groom");
})
moreSit.addEventListener("click", (e) => {
    window.location.href = "more info.html";
    sessionStorage.setItem("selection", "sit");
})

//booking
bookGr.addEventListener("click", (e) => {
    window.location.href = "book.html";
})
bookSit.addEventListener("click", (e) => {
    window.location.href = "book.html";
})

function createReview(starNum){
    //create number of stars for the review

    //create reviewer name and review message
}

createReview(3); //starNum will be replaced with actual eventually
