veiculos1 = document.querySelector('.veiculos1')
veiculos2 = document.querySelector('.veiculos2')
veiculos3 = document.querySelector('.veiculos3')
character = document.querySelector('.character')
let posicao = 95
let posicao2 = 95
let posicao3 = 95

function moveVeiculos1() {
    veiculos1.style.left = `${posicao}%`
    posicao--
    if(posicao < -80) {
    	posicao = 95
    } 
    console.log('pos 1 ' + posicao)
    if(posicao1 > -40 && posicao1 < 14 && upDown > 246 && upDown < 336) {
        alert('atropelou')
    }
}

function moveVeiculos2() {
    veiculos2.style.left = `${posicao2}%`
    posicao2--
    if(posicao2 < -80) {
        posicao2 = 95
    } 
    console.log('pos 2 ' + posicao2)
    if(posicao2 > -40 && posicao2 < 14 && upDown > 136 && upDown < 234) {
        alert('atropelou')
    }
}

function moveVeiculos3() {
    veiculos3.style.left = `${posicao3}%`
    posicao3--
    if(posicao3 < -80) {
        posicao3 = 95
    } 
    console.log('pos 3 ' + posicao3)
    if(posicao3 > -40 && posicao3 < 14 && upDown > 36 && upDown < 120) {
        alert('atropelou')
    }
}

intervalo = setInterval(moveVeiculos1, 20)
intervalo2 = setInterval(moveVeiculos2, 30)
intervalo3 = setInterval(moveVeiculos3, 40)

let upDown = 0 
let leftRight = 0

document.addEventListener('keydown', (e) => {
    switch(e.key){
      case 'ArrowUp':
        character.style.bottom = upDown + 'px'
        upDown = upDown + 6
        console.log('updown ' + upDown)
        break

    case 'ArrowDown':
        character.style.bottom = upDown + 'px'
        upDown = upDown - 6
        break

    
    case 'Enter':
        clearInterval(intervalo)
        clearInterval(intervalo2)
        clearInterval(intervalo3)
        console.log('enter')
        break
    /*case 'ArrowLeft':
        character.style.left = leftRight + 'px'
        leftRight = leftRight - 6
        break

    case 'ArrowRight':
        character.style.left = leftRight + 'px'
        leftRight = leftRight + 6
        console.log('right')
        console.log(leftRight)
        break*/
    }

    if(upDown < 0) {upDown = 0}
    if(upDown > 345){upDown = 345}
    /*if(leftRight < 0) {leftRight = 0}
    if(leftRight > 300) {leftRight = 300}*/
})


function para() {
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        clearInterval(intervalo)
    }
})
}
