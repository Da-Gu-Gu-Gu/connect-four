import React from 'react'

interface Props{
  row:number,
  col:number
}

const Slot = ({row,col}:Props) => {
  return (
    <div className='md:w-[70px] md:h-[70px] overflow-hidden slot w-[35px] h-[35px] mx-[7px] my-[10px] md:m-3 rounded-full bg-black  flex justify-center items-end'>
    <div className={` disc-${row}-${col} md:w-[65px] slot-inner md:h-[65px]  w-[30px] h-[30px] rounded-full bg-kayan `}>
    </div>
</div>
  )
}

export default Slot