import gsap from "gsap"

const playerAnimation=()=>{
    gsap.fromTo('.player',{
      xPercent:-100,  
      opacity:0
    },{
      xPercent:0,
      opacity:1,
      delay:0.5
      // duration:1,
    })
    gsap.fromTo('.player-right',{
      xPercent:100,  
      opacity:0
    },{
      xPercent:0,
      opacity:1,
      delay:0.5
      // duration:1,
    })
  }
  

  export default playerAnimation