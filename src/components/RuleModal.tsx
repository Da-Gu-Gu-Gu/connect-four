import React, { useEffect } from 'react'
import {ImCross} from 'react-icons/im'
import gsap from 'gsap'

interface Props{
    onClick:()=>void,
    open:boolean,
}

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


// const ruleCloseAnimation=()=>{
//   gsap.fromTo('.rules-model',{
//     height:'100%',
//     width:'100%',
//     overflow:'visible',
//     // padding:'12px',
//     borderWidth:'2px',
//     // paddingBottom:'49px',
//   },{
//     height:0,
//     width:0,
//     // padding:0,
//     borderWidth:0,
//     overflow:'hidden'
//   })
// }


const RuleModal = ({onClick,open}:Props) => {


  useEffect(()=>{

    open && ruleOpenAnimation()
  },[open])

  return (
    <div  className={`transition-all 	w-[300px]  ${open?'h-max p-3 pb-10 border-2 border-black ':'h-0 overflow-hidden'}  z-20 bg-white relative  rounded-xl  `}>
        <h1 className='text-center rules-text font-bold text-2xl my-3'>RULES</h1>
        <h2 className='text-kayan rules-text  font-bold mb-1'>OBJECTIVE</h2>
        <p className='text-sm text-gray-600 rules-text '>
            Be the first player to connect 4 of the same colored discs in a row(either vertically,horizontally,or diagonally).
        </p>
        <h2 className='text-kayan font-bold my-3 rules-text '>HOW TO PLAY</h2>
        <p className='text-sm mb-2 rules-text '><span className='font-bold mr-2'>1.</span> Red goes first in first game.</p>
        <p className='text-sm mb-2 rules-text '><span className='font-bold mr-2'>2.</span> Players must alternate turns and only one disc can be dropped in each turn.</p>
        <p className='text-sm mb-2 rules-text '><span className='font-bold mr-2'>3.</span>
        The game ends when there is a 4-in-a-row or a .
     </p>
     <p className='text-sm mb-2 rules-text '><span className='font-bold mr-2'>4.</span>
        The starter of the previous game goes second on the next game.
     </p>

     <div onClick={onClick} className='absolute cursor-pointer -bottom-4 left-1/2 -translate-x-1/2 bg-black pb-1 rounded-full'>
    <div className=' bg-panyaung p-3 rounded-full cross'>
        <ImCross size={30} />
    </div>
    </div>

    </div>
  )
}

export default RuleModal