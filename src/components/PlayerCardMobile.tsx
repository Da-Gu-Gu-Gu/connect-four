import React from 'react'
import { AiOutlineSmile } from 'react-icons/ai'

const PlayerCardMobile = () => {
  return (
    <div className="md:w-[200px] w-[130px] bg-black pb-2 border-2 border-black rounded-xl">
    <div className="md:w-[200px] w-[130px] h-[70px] border-2 border-black flex  j items-center bg-white rounded-xl ">
         <AiOutlineSmile  size={45} className="bg-panyaung rounded-full -ml-5 " />
         <div className="flex md:flex-row flex-col w-full justify-around items-center">
         <p className="font-bold">PLAYER 1</p>
        <h1 className="font-bold text-3xl">12</h1>
        </div>
</div>
</div>
  )
}

export default PlayerCardMobile