const container = document.querySelector(`.container`)
const blackButton = document.createElement(`button`)
const grayButton = document.createElement(`button`)
const RGBbutton = document.createElement(`button`)
const gridSize = document.createElement(`button`)
const section = document.querySelector(`.section`)
const allButtons = document.querySelector(`.buttons`)

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}

function createDiv(cols, rows){
    for(let i = 0; i < (cols * rows); i++){
        const div = document.createElement(`div`)
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add(`box`)
    }
}
createDiv(16, 16)

function blackColor() {
    const boxs = container.querySelectorAll('.box')
    blackButton.textContent = 'BLACK';
    blackButton.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    allButtons.appendChild(blackButton).classList.add('btn')
}
blackColor() 

function grayColor() { 
    const boxs = container.querySelectorAll('.box')
    grayButton.textContent = "GRAY"
    grayButton.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    allButtons.appendChild(grayButton).classList.add('btn')
}
grayColor()

function rgbColors() {
    const boxs = container.querySelectorAll('.box')
    RGBbutton.textContent = "RGB"
    RGBbutton.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    allButtons.appendChild(RGBbutton).classList.add('btn')
}
rgbColors()

function reSet() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}

function reSize() {
    gridSize.textContent = 'GRID-SIZE'
    gridSize.addEventListener('click', () => {
        let user = prompt('Please Enter Your GRID size: ')
        if(user === null || user < 1 || user > 100){
            reSet();
            createDiv(16,16);
            grayColor();
            rgbColors();
            blackColor();
        } else { 
            reSet();
            createDiv(user,user);
            grayColor();
            rgbColors();
            blackColor();
        }
    })
    allButtons.appendChild(gridSize).classList.add('btn')
}
reSize()