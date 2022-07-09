const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let score = 0

const soundPlayer = new Audio('marioTheme.mp3')
soundPlayer.currentTime = 0
soundPlayer.play()


const jump = (e) =>{
    if(e.keyCode == 32 || e.keyCode == 38){
        mario.classList.add('jump')

        setTimeout( ()=>{
            mario.classList.remove('jump')
        }, 500 )  // Mesmo tempo que a duração da animação
    }
}

const loop = setInterval( ()=>{
    const pipePosition = pipe.offsetLeft
    console.log(pipePosition)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')  // Pega a propriedade bottom do mario e o replace joga fora o 'px' que é retornado e o '+' antes de window tenta converter para número quando possível
    if(pipePosition <= 120 && pipePosition > 0 &&  marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 

        mario.src = 'images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
        soundPlayer.pause()
        document.querySelector('#container-over').style.display = 'flex'
        document.querySelector('#container-over #game-over h6 span').innerHTML = score
    }
}, 10)

const durationPipe = +window.getComputedStyle(pipe).animationDuration.replace('s','')
const pipePosition = pipe.offsetLeft
const loop2 = setInterval( ()=>{
    if( true ){
        score += 1
    }
}, durationPipe*1000 )

document.addEventListener('keydown', jump)

// RESTART dado pelo reload da página
document.querySelector('#restart').addEventListener('click', () => location.reload())
