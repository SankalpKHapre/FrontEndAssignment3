// class Animator extends React.Component {
//   componentDidMount() {
//     this.frame = requestAnimationFrame(this.loop);
//   }
//   componentWillUnmount() {
//     cancelAnimationFrame(this.frame);
//   }
//   loop = () => {
//     console.log("Animating...");
//     this.frame = requestAnimationFrame(this.loop);
//   };
//   render() { return <div>Running Animation</div> }
// }

//
import React, { useEffect, useRef, useState } from 'react'

const q1 = () => {
    const frame = useRef(null)


    useEffect(()=>{
        
    },
    [frame])
    function requestAimationfram(){

    }
    

    handleLoop = ()=>{
        console.log(("Animationg"));
        
        
    }

  return (
    <div>Running Animation</div>
  )
}

export default q1