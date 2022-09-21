const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");


menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("navbar-active");
}
window.onscroll = () => {
    navbar.classList.remove("navbar-active");
}