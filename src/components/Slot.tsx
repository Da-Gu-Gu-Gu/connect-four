import React from 'react'
import {MdOutlineStars} from 'react-icons/md'
interface Props{
  row:number,
  col:number
}

const Slot = ({row,col}:Props) => {
  return (
    <div className='md:w-[70px] relative md:h-[70px] overflow-hidden slot w-[35px] h-[35px] mx-[7px] my-[10px] md:m-3 rounded-full bg-black  '>
    <div className={`absolute bottom-0 justify-self-center left-1/2 -translate-x-1/2 md:w-[65px] slot-inner md:h-[65px]  w-[30px] h-[30px] rounded-full bg-kayan `}>
    </div>
    <div className={`absolute bottom-0 flex justify-center items-center justify-self-center left-1/2 -translate-x-1/2 opacity-0 disc-${row}-${col} md:w-[65px]  md:h-[65px]  w-[30px] h-[30px] rounded-full
     bg-panyaung   `}>
      <MdOutlineStars className={`star-${row}-${col} w-[20px]  h-[20px] md:w-[30px] md:h-[30px]  text-black opacity-0`}  />
    </div>
</div>
  )
}

export default Slot