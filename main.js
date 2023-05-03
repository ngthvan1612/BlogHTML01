let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

searchIcon.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}
