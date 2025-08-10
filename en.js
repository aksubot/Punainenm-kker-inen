const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
let menuText = document.getElementById('menuText');
const overlay = document.querySelector(".overlay");
const menuTxtCont = document.querySelector(".navbarTextCont");


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    overlay.classList.toggle("overlay-is-active");
    menuTxtCont.classList.toggle("active");

    if(menuText.innerHTML == 'MENU') menuText.innerHTML = 'CLOSE'
    else if(menuText.innerHTML == 'CLOSE') menuText.innerHTML = 'MENU'
});

overlay.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menuTxtCont.classList.toggle("active");

    overlay.classList.toggle("overlay-is-active");

    menuText.innerHTML = 'MENU'
});

const observer = new IntersectionObserver((entries, options) => {
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


// Sijainti tavaraa
const sP = document.querySelectorAll(".sijaintiP");
const iframe = document.querySelector(".iframe");

let sources = ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7668.401973809804!2d25.346603731924997!3d61.28205515988986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!3m2!1d61.2866346!2d25.3390062!4m5!1s0x468fcb19414eff1d%3A0x307d69555a4019ba!2sMaakesken%20uimaranta!3m2!1d61.2776007!2d25.3755658!5e0!3m2!1sfi!2sfi!4v1754492381752!5m2!1sen!2sen",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61278.72864315485!2d25.219020604735043!3d61.31709470128724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!3m2!1d61.2866346!2d25.3390062!4m5!1s0x468fb6f61613e8cf%3A0x307b94ae1bcc3345!2sS-market%20Padasjoki%2C%20Kauppatie%2C%20Padasjoki!3m2!1d61.349344599999995!2d25.2673703!5e0!3m2!1sfi!2sfi!4v1754492739009!5m2!1sen!2sen",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61269.142783171614!2d25.31474945509654!3d61.32199810402235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!3m2!1d61.2866346!2d25.3390062!4m5!1s0x468fc9fd25651a19%3A0x12062c9fbaf65479!2sP%C3%A4ij%C3%A4nteen%20kansallispuisto%2C%20Kelvenne%2C%20Padasjoki!3m2!1d61.3574239!2d25.4553813!5e0!3m2!1sfi!2sfi!4v1754492890503!5m2!1sen!2sen",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d246586.8606692641!2d25.295362153047233!3d61.12868633622283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!3m2!1d61.2866346!2d25.3390062!4m5!1s0x468e285031353e9f%3A0x63b7b10aa11bd2e5!2sLahti%20Rautatieasema%2C%20Mannerheiminkatu%2C%20Lahti!3m2!1d60.976872799999995!2d25.6576786!5e0!3m2!1sfi!2sfi!4v1754492959736!5m2!1sen!2sen",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d996760.8384838413!2d23.78391237540796!3d60.794618602074934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!3m2!1d61.2866346!2d25.3390062!4m5!1s0x468df8658f62a2b1%3A0xfbf0d9012c28b396!2sHelsinki-Vantaan%20lentoasema%20(HEL)%2C%20Lentoasemantie%2C%20Vantaa!3m2!1d60.3179446!2d24.949624!5e0!3m2!1sfi!2sfi!4v1754493015494!5m2!1sen!2sen",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.60260794234986!2d25.3388200973933!3d61.286633901771836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468fca1700d30f6d%3A0xd00982ea467f6e6d!2sB%26B%20Punainen%20Tupa!5e0!3m2!1sfi!2sfi!4v1754491780707!5m2!1sen!2sen"
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

