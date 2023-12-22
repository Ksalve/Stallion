let view_all_btn = document.querySelectorAll(".btn1")

export function setGalleryThemeElectric() {
    view_all_btn.forEach(function(element) {
        element.classList.add("btn1-elec");
    })
}

export function setGalleryThemeGo() {
    view_all_btn.forEach(function(element) {
        element.classList.add("btn-go");
    })
}