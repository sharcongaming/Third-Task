import React from 'react'
import "./Style/port.css"
import ChatBox from './ChatBox'
const Portfolio = () => {
  return (
    <div>
        <div className='port-first-page'>
        <div className='port-page'>
            <div className='text-div'>
            <h2 className='gradient-text'>AMAZING SHOWCASES</h2>
            <p className='gradient-text'>Creativity involves breaking out 
                of expected & repeatable patterns in order to 
                look at things in different way than ever before.</p>
            </div>

        </div>
        <div className='second-port'>
        <ChatBox/>
            <h2>Our Work</h2>
           <div className='port-dived'>
   
           <div className='second-port-div'>

           <img  src='https://media.istockphoto.com/id/1320799591/vector/game-on-neon-game-controller-or-joystick-for-game-console-on-blue-background.jpg?s=612x612&w=0&k=20&c=CbxRq6ctP5Ta1QLu18UMtvgJf4D-zFpTMm0Rz14_Gy0='/>

           </div>
           <div className='second-port-div'>

           <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaElhQA6hauc2N7bnTLhlg3ndyl3D56xDWum27_AFvaQb_I9CO4VJIMS61OXF7Sw9GAg&usqp=CAU'/>

           </div>
           <div className='second-port-div'>

           <img  src='https://media.istockphoto.com/id/1424506235/vector/time-to-play-text-with-game-controller.jpg?s=612x612&w=0&k=20&c=A49ED191HUE_grCXC_lmI1J8aAghJs0IyHkNFlXGCKs='/>

           </div>
           

          
         
           </div>
        </div>
        </div>

    </div>
  )
}

export default Portfolio