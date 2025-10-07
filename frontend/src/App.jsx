// import { useState } from 'react'
// import { gsap } from 'gsap'
// import { useGSAP } from "@gsap/react";
// import './App.css'
// import GsapTime from './GsapTime';

import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import * as Sentry from '@sentry/react';


// function App() {
  //   const [count, setCount] = useState(0)
  //   useGSAP(() => {
    //     gsap.to('#blue', {
      //       x: 250,
      //       repeat: -1,
      //       yoyo: true,
      //     });
      //     gsap.fromTo(
        //       '#box',
        //       { x: 0, opacity: 0.5, scale: 0.8, rotation: 0 },
        //       {
//         x: 250,
//         opacity: 1,
//         scale: 1.2,
//         rotation: 360,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.5,
//         borderRadius: '50%',
//         ease: 'power1.inOut',
//       }
//     );
//   }, []);
//   return (
//     <>
//      {/* <span id="blue" >Hello</span>
//      <div
//        id="box"
//        style={{
//          width: '200px',
//          height: '200px',
//          background: '#f0f0f0',
//          border: '2px solid #333',
//          borderRadius: '12px',
//          display: 'flex',
//          alignItems: 'center',
//          justifyContent: 'center',
//          margin: '40px auto'
//        }}
//      >
//        <span style={{ fontWeight: 'bold' }}>This is a box</span>
//      </div> */}
//      <GsapTime/>
//     </>
//   )
// }

// export default App
function App(){
  
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      {/* <HowItWorks/> */}
      </main>
    </>
  );

}

export default Sentry.withProfiler(App);
// export default App