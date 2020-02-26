var div = document.querySelector('div')
var left = 0
var updateLeft = function () {
    left = left + 1
    if (left > 100){
        left = 0
    }
    div.style.transform = 'translateX(' + left + 'px)'
    requestAnimationFrame(updateLeft)
}
requestAnimationFrame(updateLeft)