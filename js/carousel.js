let initValue = 1
let imgLength = $('.carousel > img').length

init()

setInterval(() => {
    toLeft(getImg(initValue)).one('transitionend', function() {
        toRight($(this))
    })
    if(initValue === imgLength) {
        initValue = 0
    }
    toCenter(getImg(initValue+1))
    initValue++
}, 3000)


function init() {
    getImg(initValue).addClass('center').siblings().addClass('right')
}

function getImg(index) {
    return $(`.carousel > img:nth-child(${index})`)
}

function toLeft($img) {
    return $img.removeClass('center').addClass('left')
}

function toRight($img) {
    return $img.removeClass('left').addClass('right')
}

function toCenter($img) {
    return $img.removeClass('right').addClass('center')
}