import { useState } from 'react'
import './nome.css'
import { Moldura } from '../Moldura'

export function Nome(){

    let now = 0

    const imagens = [
        '../src/imagens/img1.png',
        '../src/imagens/img2.png',
        '../src/imagens/img3.png',
    ]

    const maxImg = imagens.length 

    const [slide, setSlide] = useState()


    function handleSetSlide(){
        if(now > 3){
            now = 0
        }
        setSlide(imagens[now])
        now++

    }

 function start(){
        setInterval(() => {
            handleSetSlide()
        }, 2000)
    }


    return(
        <div id="slide">
            <Moldura 
            slide = {slide}
            />
           
            <button id='go' onClick={start}>go</button>
        </div>
        
    )
    
}