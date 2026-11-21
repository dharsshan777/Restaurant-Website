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

// const navbar=document.getElementById("mainnavbar");
// const menu=document.getElementById("navbarNavDropdown");

// menu.addEventListener("shown.bs.collapse",function(){
//     navbar.classList.add("menu-open")
// })

// menu.addEventListener("hidden.bs.collapse",function(){
//     navbar.classList.remove("menu-open")
// })

