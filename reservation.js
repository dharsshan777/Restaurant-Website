const navbar = document.getElementById("mainnavbar");

function updateNavbar() {
    if (window.scrollY > 400) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);
window.addEventListener("pageshow", updateNavbar);

updateNavbar();