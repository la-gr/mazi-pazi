
let info = document.getElementById("info");
let about = document.getElementById("about");
let prices = document.getElementById("prices");
let dogCont = document.querySelector('.dog');
let dogNav = document.querySelector('.dogNav');

let textGr = ["DOG GROOMING", "this is a description for the grooming service that this business provides wow wow i don't know what to put here there are a lot of things that could be said", "Bathing - $<br>Brushing - $<br>Hair Cut - $<br>Nail Clipping - $<br>Ear Cleaning - $<br>Hygienic Treatment - $<br>Anti-Flea and Anti-Tick Treatment - $<br>Medicinal Shampoo Treatment - $", "NEGOVANJE PASA", "ovo je diskripcija neka", "Kupanje - $<br>Rascetkavanje - $<br>Sisanje - $<br>Skracivanje Noktiju - $<br>Ciscenje Usiju - $<br>Higijenski Tretman - $<br>Tretman Protiv Buva i Krpelja - $<br>Tretmen Medicinskim Samponima - $"  ];
let textSit = ["DOG DAYCARE/BOARDING", "this is a description for the sitting service that this business provides wow wow i don't know what to put here there are a lot of things that could be said", "Daycare - $<br>Multi-Day Boarding - $", "BORAVKA/PANSIONA", "ima puno informacija ovde", "Uskluga Dnevnog Boravka - $<br>Usluga Visednevnog Pansiona - $"];
//determining whether user chose grooming or sitting
let current = "";
const selection = sessionStorage.getItem("selection");
const language = sessionStorage.getItem("lang");
if (selection === "groom") {
    //description of the service selected
    current = textGr;
    if (language === "en"){
        english()
    }else{
        serbian()
    }
    setImages("groom");
} else if (selection === "sit") {
    //description of the service selected
    current = textSit;
    if (language === "en"){
        english()
    }else{
        serbian()
    }
    setImages("stay");
}

//sets the images for the slideshow
function setImages(type){
    for (let i = 1; i < 6; i++) {
        let dog = document.createElement("img");
        let littleImg = document.createElement("img");
        dog.src = "dogs/"+type+i+".jpg";
        littleImg.src = "dogs/"+type+i+".jpg";
        littleImg.onclick = () => {scrollToImage(i-1)}
        dogCont.appendChild(dog);
        dogNav.appendChild(littleImg);
    }
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

//changes languages from serbian to english and vice versa, along with button color
let currentLang = language
srb.addEventListener("click", (e) => {
    changeBut(srb,eng);
    currentLang = "srb";
    serbian();
})
eng.addEventListener("click", (e) => {
    changeBut(eng,srb);
    currentLang = "en";
    english()
})

function english(){
    about.innerHTML = current[0];
    info.innerHTML = current[1];
    prices.innerHTML = current[2];
    document.getElementById("book").textContent = "Book an Appointment!";
    document.getElementById("grooming").innerHTML = "Grooming";
    document.getElementById("daycare").innerHTML = "Daycare/Boarding";
    changeBut(eng,srb);
}
function serbian(){
    about.innerHTML = current[3];
    info.innerHTML = current[4];
    prices.innerHTML = current[5];
    document.getElementById("book").textContent = "Zakazite Imenovanje!";
    document.getElementById("grooming").innerHTML = "Negovanje";
    document.getElementById("daycare").innerHTML = "Boravka/Pansiona";
    changeBut(srb,eng);
}


function changeBut(active, not){
    not.style.zIndex = "1";
    active.style.zIndex = "2";
    active.style.backgroundColor = "#e9b4ff";
    not.style.backgroundColor = "#a889a9";
}

document.getElementById("mazi").onclick = function() {
    window.location.href = "index.html";
}
document.getElementById("grooming").onclick = function() {
    window.location.href = "more info.html";
    sessionStorage.setItem("lang", currentLang);
    sessionStorage.setItem("selection", "groom");

}
document.getElementById("daycare").onclick = function() {
    window.location.href = "more info.html";
    sessionStorage.setItem("lang", currentLang);
    sessionStorage.setItem("selection", "sit");
}