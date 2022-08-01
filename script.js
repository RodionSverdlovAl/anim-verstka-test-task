// Логика прилоадера
document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img, video');
    let i = 0
    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
            i++
            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)
            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })
})

// когда страница полностью загружена или сохранена в кеше браузера и загружается моментально то убираем прелоадер
function loadPage() {
    preloader.classList.add('preloader--hide')
}