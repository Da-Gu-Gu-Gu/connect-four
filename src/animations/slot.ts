import gsap from "gsap";

const slotAnimation=()=>{ ///intro

    gsap.fromTo('.slot-inner',{
      yPercent:-200,
      opacity:0,
    },{
      yPercent:0,
      opacity:1,
      duration:0.5,
      stagger:0.05,
      delay:1,
      ease: "power2.in",
    })
  }

  export default slotAnimation