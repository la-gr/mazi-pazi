let bookGr = document.getElementById("grb");
let bookSit = document.getElementById("sb");
let moreGr = document.getElementById("grm");
let moreSit = document.getElementById("sm");

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