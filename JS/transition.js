// Function to toggle the theme and change button text
const button = document.getElementById('themeButton');
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand')
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.getElementById('logo-img')

const bodyImg = document.querySelector('.Gokart-img');

const f1_border =  document.querySelector('.f1-border');
const f1_h2 =  document.querySelector('.f1-h2');
const f1_para =  document.querySelector('.f1-para');

function setThemeElectric() {
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

    //Body Image
    bodyImg.classList.remove('body-img-go')
    bodyImg.classList.add('body-img-elec')

    f1_border.classList.remove('f1-border-go')
    f1_border.classList.add('f1-border-elec')
    
    f1_h2.classList.remove('h2-go')
    f1_h2.classList.add('h2-elec')

    f1_para.classList.remove('para-go')
    f1_para.classList.add('para-elec')
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

    //Body Image
    bodyImg.classList.remove('body-img-elec')
    bodyImg.classList.add('body-img-go')

    f1_border.classList.add('f1-border-go')
    f1_border.classList.remove('f1-border-elec')
    
    f1_h2.classList.add('h2-go')
    f1_h2.classList.remove('h2-elec')

    f1_para.classList.add('para-go')
    f1_para.classList.remove('para-elec')
}


function toggleTheme() {
    if (button.textContent === 'Electric') {
        localStorage.setItem('theme', 'electric')
        setThemeElectric();
    } else {
        localStorage.setItem('theme', 'gokart')
        setThemeGo();
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem('theme')
    console.log("Content loaded theme is " + theme)
    if(theme === 'electric')
        setThemeElectric();
    else setThemeGo();
})


//when runs
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
    toggleTheme();
});