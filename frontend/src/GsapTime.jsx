import { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import './App.css'

function GsapTime() {
  const [count, setCount] = useState(0)
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  useGSAP(() => {
    tl.to('#blue', {
      x: 200,
      duration: 1,
      ease: 'power1.inOut',
    })
    tl.to('#box', {
      y: 100,
      scale: 1.2,
      backgroundColor: '#ffe066',
      duration: 1.2,
      ease: 'power1.inOut',
    }, '-=0.5') // overlap the animations by 0.5s
    tl.to('#box', {
      rotation: 360,
      duration: 1,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <>
     <span id="blue" >Hello</span>
     <button onClick={()=>{
            if(tl.paused()) {
              tl.resume();
            } else {
              tl.pause();
            }
        }}>resume/paused</button>
     <div
       id="box"
       style={{
         width: '200px',
         height: '200px',
         background: '#f0f0f0',
         border: '2px solid #333',
         borderRadius: '12px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         margin: '40px auto'
       }}
     >
        
       <span style={{ fontWeight: 'bold' }}>This is a box</span>
     </div>
    </>
  )
}

export default GsapTime
