let timeline_item = document.querySelectorAll(".timeline-item")
let date = document.querySelectorAll(".date")
let container = document.getElementById("container")


export function setAchievementThemeElectric() {
    date.forEach(function(element) {
        element.classList.add("date-elec");
    })

    container.classList.add("container-bg-elec")

    timeline_item.forEach((elem)=>{
        elem.classList.add('timeline-item-elec')
        elem.classList.remove('timeline-item-go')
    })
}

export function setAchievementThemeGo() {
    date.forEach(function(element) {
        element.classList.add("date-go");
    })

    container.classList.add("container-bg-go")

    timeline_item.forEach((elem)=>{
        elem.classList.add('timeline-item-go')
        elem.classList.remove('timeline-item-elec')
    })
}