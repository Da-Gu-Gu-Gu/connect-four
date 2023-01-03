import gsap from "gsap";

const menuAnimation=()=>{
    gsap.fromTo('.menu-btn',{
      yPercent:-100,
    },{
      yPercent:0,
      stagger:0.2,
      transformOrigin:'left',
      ease:'power2.in',
    })
    gsap.fromTo('.menu',{
      color:'#5b21b6',
    },{
      color:'white',
      stagger:0.1,
      delay:0.2,
      ease:'power2.inOut',
      duration:0.5,
    })
  }


export default menuAnimation