// Логика прелоадера
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



const loadPage = () => {
 preloader.classList.add('preloader--hide')
}

if (document.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    document.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    document.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    document.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  document.attachEvent("onmousewheel", onWheel);
}

const down = () =>{
    hole.classList.add('_active')
}
function onWheel(e) {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;

  if(delta> 0){
    hole.classList.add('_active')
  }else{
    hole.classList.remove('_active')
  }

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

const move_button = document.getElementById('move_button');
const whiteBoard = document.getElementById('white-board');

move_button.addEventListener('click', function(){
    whiteBoard.classList.add('_active')
    setTimeout(()=>{
        location.href = 'newPage.html';
        setTimeout(()=>{
            whiteBoard.classList.remove('_active')
        },1500)
    },1000)
})
