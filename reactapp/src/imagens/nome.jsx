import './nome.css'

export function Nome(){

    let now = 0

    const imagens = [
        '../src/imagens/img1.png',
        '../src/imagens/img2.png',
        '../src/imagens/img3.png',
    ]

    const maxImg = imagens.length 


    function slide(){
        imagens[now].classList.remove('primeira')
        now++
        if(now >= maxImg)
        now = 0
        imagens[now].classList.add('primeira')
    }

 function start(){
        setInterval(() => {
            slide()
        }, 2000)
    }


    return(
        <div id="slide">
            <img src={imagens[0]} className="primeira" alt="" />
            <img src={imagens[1]} alt="" />
            <img src={imagens[2]} alt="" />
            <button id='go' onClick={start}>go</button>
        </div>
        
    )
    
}