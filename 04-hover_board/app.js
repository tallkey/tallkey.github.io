const board = document.querySelector('#board')
const colors = ['#FFB6C1', '#3CB371', '#FF7F50', '#7FFFD4', '#BA55D3', '#FFDEAD', '#F4A460', '#191970']
const SQUARES_NUMBER = 500


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor )

    square.addEventListener('mouseleave', removeColor )

    board.append(square)
}


function setColor(e) {
    const element = e.target
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function removeColor(e) {
    const element = e.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
