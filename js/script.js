const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const txt = document.querySelector('p')

let fontSize = 36

const up = () => {
    if(fontSize >= 80) return
    fontSize++
    txt.style.fontSize = fontSize + 'px'
}

const down = () => {
    if(fontSize <= 21) return
    fontSize--
    txt.style.fontSize = fontSize + 'px'
}

const color = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    txt.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener('click', up)
sizeDown.addEventListener('click', down)
colorBtn.addEventListener('click', color)