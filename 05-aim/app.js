
const colors = ['#FFB6C1', '#3CB371', '#FF7F50', '#7FFFD4', '#BA55D3', '#FFDEAD', '#F4A460', '#191970']

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(e) {
    const element = e.target
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}


const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')



let time = 0
let score = 0

const board = document.querySelector('#board')


startBtn.addEventListener('click', (e) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click',  e => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}


function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1> Счёт: <span class="primary"> ${score} </span> </h1>`
}


function createRandomCircle() {

    const circle = document.createElement('div')
    const size = getRandomSize(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomSize(0, width - size)
    const y = getRandomSize(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${getRandomColor()}`

    board.append(circle)

}



function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
