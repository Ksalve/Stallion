let timeline_item = document.querySelectorAll(".timeline-item")

export function setAchievementThemeElectric() {
    timeline_item.forEach((elem)=>{
        elem.classList.add('timeline-item-elec')
        elem.classList.remove('timeline-item-go')
    })
}

export function setAchievementThemeGo() {
    timeline_item.forEach((elem)=>{
        elem.classList.add('timeline-item-go')
        elem.classList.remove('timeline-item-elec')
    })
}