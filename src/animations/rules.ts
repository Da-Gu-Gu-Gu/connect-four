import gsap from "gsap"

const ruleOpenAnimation=()=>{
    gsap.fromTo('.rules-text ',{
      yPercent:-40,
      xPercent:0
    },{
      xPercent:0,
      yPercent:0,
      ease:'power2.in',
      duration:0.3
  
    })
  
    gsap.fromTo('.cross ',{
      rotate:0
    },{
      rotate:360,
      ease:'power2.in',
      duration:1,
      delay:0.2,
    })
  }

  export default ruleOpenAnimation