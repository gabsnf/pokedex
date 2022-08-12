import { useState } from 'react'
import './nome.css'
import { Moldura } from '../Moldura'

export function Nome(){

    let now = 0

    const imagens = [
        '../src/assets/img1.png',
        '../src/assets/img2.png',
        '../src/assets/img3.png',
    ]

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
        }, 600)
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