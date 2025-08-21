
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
}, {
    rootMargin: "-80px",
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const ddBtn = document.querySelector(".ddBtn");
const arrow = document.querySelector(".arrow");
const ML_Cards = document.querySelector(".ML_Cards");
const dd = document.querySelector(".dd");

ddBtn.addEventListener("click", () => {
    ddBtn.classList.toggle("active");
    arrow.classList.toggle("active");
    ML_Cards.classList.toggle("active");
    dd.classList.toggle("active");
});

// Sijainti tavaraa
const sP = document.querySelectorAll(".sijaintiP");
const iframe = document.querySelector(".iframe");

let sources = ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7659.415188660705!2d25.308385531967215!3d61.31883756021016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!3m2!1d61.3171033!2d25.3058057!4m5!1s0x468fc902a5e5d0c3%3A0x9f6e23311c071926!2sMonuksen%20uimaranta%2C%20Padasjoki!3m2!1d61.315866299999996!2d25.3317223!5e0!3m2!1sfi!2sfi!4v1755668100627!5m2!1sfi!2sfi",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30629.351044380815!2d25.236970056504475!3d61.32733851441844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!3m2!1d61.3171033!2d25.3058057!4m5!1s0x468fb659e7d0ef6f%3A0x2fcb2e7c6976ccd2!2sPadasjoen%20Apteekki%2C%20Kauppatie%2C%20Padasjoki!3m2!1d61.349227799999994!2d25.267663499999998!5e0!3m2!1sfi!2sfi!4v1755668274050!5m2!1sfi!2sfi",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d76296.44273050818!2d25.297830093394914!3d61.33777655883746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!3m2!1d61.3171033!2d25.3058057!4m5!1s0x468fc9fd25651a19%3A0x12062c9fbaf65479!2sP%C3%A4ij%C3%A4nteen%20kansallispuisto%2C%20P%C3%A4ij%C3%A4nteen%20kansallispuisto%2C%20Kelvenne%2C%20Padasjoki!3m2!1d61.3574239!2d25.4553813!5e0!3m2!1sfi!2sfi!4v1755668385800!5m2!1sfi!2sfi",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d246468.02319613216!2d25.27997572189964!3d61.14391012078945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!3m2!1d61.3171033!2d25.3058057!4m5!1s0x468e285031353e9f%3A0x63b7b10aa11bd2e5!2sLahti%20Rautatieasema%2C%20Mannerheiminkatu%2C%20Lahti!3m2!1d60.976872799999995!2d25.6576786!5e0!3m2!1sfi!2sfi!4v1755668443811!5m2!1sfi!2sfi",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d996500.3355582933!2d23.783912573588402!3d60.80298891600944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!3m2!1d61.3171033!2d25.3058057!4m5!1s0x468df8658f62a2b1%3A0xfbf0d9012c28b396!2sHelsinki-Vantaan%20lentoasema%2C%20Lentoasemantie%2C%20Vantaa!3m2!1d60.3179446!2d24.949624!5e0!3m2!1sfi!2sfi!4v1755668519148!5m2!1sfi!2sfi",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.959746287605!2d25.30323077712866!3d61.317103275637336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468fb60f62b540bd%3A0xec063aa4735f9293!2sNyyst%C3%B6l%C3%A4ntie%20394%2C%2017510%20Padasjoki!5e0!3m2!1sfi!2sfi!4v1755668597718!5m2!1sfi!2sfi"
];


sP.forEach(function callback(v, i){
    let index = i;
    v.addEventListener('click', function callback(v, i) {
        iframe.src = sources[index];

        for(let i = 0; i < sP.length; i++){
            sP[i].classList.remove("isactive");
        }

        sP[index].classList.add("isactive");
    });
});

