let btn = document.getElementById("send")
let icons = document.querySelectorAll(".icon")

export function setContactThemeElectric() {
    btn.classList.add("send-elec")
    icons.forEach((e)=>{
        e.classList.add("icon-elec")
    })
}

export function setContactThemeGo() {
    btn.classList.add("send-go")
    icons.forEach((e)=>{
        e.classList.add("icon-go")
    })
}