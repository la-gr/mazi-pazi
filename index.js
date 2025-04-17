import i18next from 'https://unpkg.com/i18next@latest/dist/esm/i18next.js';

let bookGr = document.getElementById("grb");
let bookSit = document.getElementById("sb");
let moreGr = document.getElementById("grm");
let moreSit = document.getElementById("sm");
let srb = document.getElementById("srb");
let eng = document.getElementById("eng");

//resets the form with message sending when the page is reloaded
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

//more info
moreGr.addEventListener("click", (e) => {
    window.location.href = "more info.html";
    sessionStorage.setItem("selection", "groom");
    sessionStorage.setItem("lang", currentLang);
})
moreSit.addEventListener("click", (e) => {
    window.location.href = "more info.html";
    sessionStorage.setItem("selection", "sit");
    sessionStorage.setItem("lang", currentLang);
})

//booking
bookGr.addEventListener("click", (e) => {
    window.location.href = "book.html";
})
bookSit.addEventListener("click", (e) => {
    window.location.href = "book.html";
})

//language buttons
let currentLang = "en";
srb.addEventListener("click", async() => {
    translate('sr');
    changeBut(srb,eng);
    currentLang = "sr";
})
eng.addEventListener("click", async() => {
    translate('en');
    changeBut(eng,srb);
    currentLang = "en";
})

i18next.init({
    lng: currentLang,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                titleAbout: 'About Us',
                aboutMe: 'Mazi Pazi has 10 years of love, care, and patience for caring for your furry friends. Whether it\'s their recreation, hygiene and hair cuts, or having a comfortable and safe environment to vacation to. An environment where they have all the same benefits that they have at home - such as sleeping on their own pillow or bed with backyard access at all times.',
                ques: 'Contact Me!',
                name: 'Name',
                message: 'Message',
                send: 'Send',
                grooming: 'Grooming',
                daycare: 'Daycare/Boarding',
                moreInfo: 'MORE INFO',
                book: 'BOOK',
                boarding: 'Daycare and Boarding'
            }
        },
        sr: {
            translation: {
                titleAbout: 'O Nama',
                aboutMe: 'Mazi Pazi se 10god sa ljubavlju, paznom i strpljenjem brine o vasim ljubimicima bilo da rec o njihovoj higijeni i frizuri bilo da je u pitanju njihov boravak u prijatnom i sigurnom okruzenju gde imaju sve pogodnosti kao kod kuce-spavanje na svom jastucetu ili krevetu uz konstantan pristup dvoristu.',
                ques: 'Kontaktirajte Me!',
                name: 'Ime',
                message: 'Poruku',
                send: 'Posalji',
                grooming: 'Negovanje',
                daycare: 'Boravka/Pansiona',
                moreInfo: 'VISE INFO',
                book: 'ZAKAZI',
                boarding: 'Boravka i Pansiona'
            }
        }
    }
})

function translate (la){
    document.getElementById("title-about").innerHTML = i18next.t("titleAbout", {lng: la});
    document.getElementById("about-me").innerHTML = i18next.t("aboutMe", {lng: la});
    document.getElementById("ques").innerHTML = i18next.t("ques", {lng: la});
    document.getElementById("name").placeholder = i18next.t("name", {lng: la});
    document.getElementById("message").placeholder = i18next.t("message", {lng: la});
    document.getElementById("send").textContent = i18next.t("send", {lng: la});
    document.getElementById("grooming").innerHTML = i18next.t("grooming", {lng: la});
    document.getElementById("daycare").innerHTML = i18next.t("daycare", {lng: la});
    document.getElementById("grm").innerHTML = i18next.t("moreInfo", {lng: la});
    document.getElementById("sm").innerHTML = i18next.t("moreInfo", {lng: la});
    document.getElementById("grb").innerHTML = i18next.t("book", {lng: la});
    document.getElementById("sb").innerHTML = i18next.t("book", {lng: la});
    document.getElementById("board").textContent = i18next.t("boarding", {lng: la});
    document.getElementById("groom").textContent = i18next.t("grooming", {lng: la});
}
//changes the button appearance
function changeBut(active, not){
    not.style.zIndex = "1";
    active.style.zIndex = "2";
    active.style.backgroundColor = "#e9b4ff";
    not.style.backgroundColor = "#a889a9";
}

//shrinking header on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("ticky").style.backgroundSize = "100% 40%";
        document.getElementById("mazi").style.scale = ".75";
        document.getElementById("mazi").style.top = "-5%";
        document.getElementById("daycare").style.top = "24%";
        document.getElementById("grooming").style.top = "24%";
    } else {
        document.getElementById("ticky").style.backgroundSize = "100% 50%";
        document.getElementById("mazi").style.scale = "1";
        document.getElementById("mazi").style.top = "0";
        document.getElementById("daycare").style.top = "32%";
        document.getElementById("grooming").style.top = "32%";
    }
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

const slideIndices = {}; // stores an index per class so that each slideshow runs independently

function startSlideshow(className, interval) {
    slideIndices[className] = 0;
    const slides = document.getElementsByClassName(className);

    function showSlides() {
        let slides = document.getElementsByClassName(className);
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slideIndices[className]++;
        if (slideIndices[className] > slides.length) {
            slideIndices[className] = 1;
        }
        slides[slideIndices[className] - 1].classList.add("active");
        setTimeout(showSlides, interval); // Change image every 2 seconds
    }
    showSlides();
}

startSlideshow("DogsGr", 3400);
startSlideshow("DogsDec", 3000);
startSlideshow("person", 3500);
