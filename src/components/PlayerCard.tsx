import React from 'react'
import { AiOutlineSmile } from 'react-icons/ai'
import { RiGhostSmileLine } from 'react-icons/ri'

interface PlayerCardProps{
    name:string,
    score:number,
    isCpu?:boolean
}

const PlayerCard = ({name,score,isCpu=false}:PlayerCardProps) => {
  return (
     
       <div className='w-[150px] h-[150px] relative rounded-xl bg-black'>
       <div className='w-[150px] h-[150px] flex flex-col items-center  bottom-2 absolute border-2 border-black rounded-xl bg-white'>
          <div className='w-[30px] h-[30px] rounded-full relative bg-black -top-3'>
           <div className='w-[30px] h-[30px] absolute rounded-full bottom-1'>
            {!isCpu ? <AiOutlineSmile  size={30} className="bg-panyaung rounded-full  " />:(
                      <RiGhostSmileLine size={30} className="bg-awar rounded-full  " />
            )}
           </div>
          </div>
           <p className='font-bold mb-5'>{name}</p>
           <h1 className='text-5xl font-bold '>{score}</h1>
       </div>
 </div>
  )
}

export default PlayerCard