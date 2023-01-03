import gsap from 'gsap'

const homeAnimation=()=>{
  gsap.fromTo(
    '.category',{
      width:0
    },{
      width:'100%',
      stagger:0.1,
    }
  )
  gsap.fromTo('.category-label',{
    xPercent:-150,
  },{
    xPercent:0,
    stagger:0.2,
    delay:0.5
  })

  gsap.fromTo('.category-emoji',{
    xPercent:150,
  },{
    xPercent:0,
    stagger:0.2,
    delay:0.5
  })
}

export default homeAnimation