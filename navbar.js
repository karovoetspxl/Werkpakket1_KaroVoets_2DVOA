const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // hamburger menu activeer .active class zodat de hamburger veranderd in een X
    hamburger.classList.toggle("active");
    // activeer de .active class zodat menu items tevoorschijn komen
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    // haal de .active class van de hamburger menu zodat de rotation verwijderd word
    hamburger.classList.remove("active");
    // haal de .active class van het menu zodat het menu verwijderd
    navMenu.classList.remove("active");
}