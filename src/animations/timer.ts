import gsap from "gsap";

const timerAnimation=()=>{
    gsap.fromTo('.timer',{
     scale:1.6,
     opacity:0,
    },{
      scale:1,
      opacity:1,
      delay:3.5,
    })
  }

  export default timerAnimation