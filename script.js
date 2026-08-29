// ==============================
// LOADING
// ==============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 800);

});


// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Tutup menu setelah klik

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ==============================
// ANIMASI SAAT SCROLL
// ==============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    )
    .forEach(element => {

        observer.observe(element);

    });


// ==============================
// TOMBOL BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// EFEK NAVBAR SAAT SCROLL
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10, 35, 22, 0.97)";

    } else {

        navbar.style.background =
            "rgba(16, 44, 29, 0.88)";

    }

});


// ==============================
// PARALLAX HERO
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});


// ==============================
// EFEK MOUSE PADA KARTU
// ==============================

const cards = document.querySelectorAll(
    ".info-box div, .bridge-stats div, .mosque-card, .sun-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-7px)";

        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});