const button = document.getElementById('themeButton');

function setThemeElectric() {
    button.textContent = 'GoKart';
    // logo.src = "./Images/logo-ev.png"
    localStorage.setItem('theme', 'electric')
    if(window.location.href !== 'http://127.0.0.1:5500/Electric.html'){
        window.location.href = '/Electric.html'
    }
}

function setThemeGo() {
    button.textContent = 'Electric';
    // logo.src = "./Images/logo-go.png"
    localStorage.setItem('theme', 'gokart')
    if(window.location.href !== 'http://127.0.0.1:5500/home.html'){
        window.location.href = '/home.html'
    }
}

function toggleTheme(){
    if (button.textContent === 'Electric') {
        setThemeElectric();
    } else {
        setThemeGo();
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem('theme')
    if(theme){
        console.log("Content loaded theme is " + theme)
        if(theme === 'electric')
            setThemeElectric();
        else setThemeGo();
    }
    else setThemeGo();
})

themeButton.addEventListener('click', () => {
    toggleTheme();
});