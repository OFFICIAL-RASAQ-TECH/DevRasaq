// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ================================
// CV BUTTON
// ================================

const cvBtn = document.getElementById("cvBtn");

cvBtn.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
        "CV download is ready. Add your CV file and connect it to this button."
    );

});


// ================================
// PROJECT HOVER EFFECT
// ================================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// ================================
// SCROLL TO TOP
// ================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log(
    "🚀 Welcome to CodeCraft Portfolio!"
);