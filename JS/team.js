let clr = document.querySelector(".clr")
let position = document.querySelectorAll(".position")

export function setTeamThemeElectric() {
    clr.classList.add('clr-elec')

    position.forEach(function(element) {
        element.classList.add("posi-elec");
    })
    return
}

export function setTeamThemeGo() {
    clr.classList.add('clr-go')

    position.forEach(function(element) {
        element.classList.add("posi-go");
    })
    return
}