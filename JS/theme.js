console.log("loaded")
import { setAchievementThemeElectric, setAchievementThemeGo } from "./achievement.js";

const button = document.getElementById('themeButton');
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand')
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.getElementById('logo-img')

function setThemeElectric() {
    localStorage.setItem('theme', 'electric')

    button.textContent = 'GoKart';
    logo.src = "./Images/logo-ev.png"
    button.classList.remove('btn-go')
    button.classList.add('btn-elec')
    //navbar
    navbar.classList.remove('navbar-go')
    navbar.classList.add('navbar-elec')

    navbarBrand.classList.remove('navbar-brand-go')
    navbarBrand.classList.add('navbar-brand-elec')

    navLinks.forEach(element => {
        element.classList.remove('nav-link-go')
        element.classList.add('nav-link-elec')
    });

    setAchievementThemeElectric()
}

function setThemeGo() {
    localStorage.setItem('theme', 'gokart')

    button.textContent = 'Electric';
    logo.src = "./Images/logo-go.png"

    //Navbar 
    navbar.classList.remove('navbar-elec')
    navbar.classList.add('navbar-go')

    navLinks.forEach(element => {
        element.classList.remove('nav-link-elec')
        element.classList.add('nav-link-go')
    });

    button.classList.remove('btn-elec')
    button.classList.add('btn-go')

    setAchievementThemeGo()
}

function toggleTheme(){
    if (button.textContent === 'Electric') {
        setThemeElectric();
    } else {
        setThemeGo();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem('theme')
    console.log("Content loaded theme is " + theme)
    if (theme === 'electric')
        setThemeElectric();
    else setThemeGo();
})

themeButton.addEventListener('click', () => {
    toggleTheme();
});