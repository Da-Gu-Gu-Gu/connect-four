import React from 'react'
import {ImCross} from 'react-icons/im'

interface Props{
    onClick:()=>void,
    open:boolean,
}

const RuleModal = ({onClick,open}:Props) => {
  return (
    <div  className={` ${open?'h-max p-3 pb-10 border-2 border-black ':'h-0 overflow-hidden'} z-20 bg-white relative w-[300px] rounded-xl  `}>
        <h1 className='text-center font-bold text-2xl my-3'>RULES</h1>
        <h2 className='text-kayan font-bold mb-1'>OBJECTIVE</h2>
        <p className='text-sm text-gray-600'>
            Be the first player to connect 4 of the same colored discs in a row(either vertically,horizontally,or diagonally).
        </p>
        <h2 className='text-kayan font-bold my-3'>HOW TO PLAY</h2>
        <p className='text-sm mb-2'><span className='font-bold mr-2'>1.</span> Red goes first in first game.</p>
        <p className='text-sm mb-2'><span className='font-bold mr-2'>2.</span> Players must alternate turns and only one disc can be dropped in each turn.</p>
        <p className='text-sm mb-2'><span className='font-bold mr-2'>3.</span>
        The game ends when there is a 4-in-a-row or a .
     </p>
     <p className='text-sm mb-2'><span className='font-bold mr-2'>4.</span>
        The starter of the previous game goes second on the next game.
     </p>

     <div onClick={onClick} className='absolute cursor-pointer -bottom-4 left-1/2 -translate-x-1/2 bg-black pb-1 rounded-full'>
    <div className=' bg-panyaung p-3 rounded-full'>
        <ImCross size={30} />
    </div>
    </div>

    </div>
  )
}

export default RuleModal