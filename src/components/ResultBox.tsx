import React from 'react'

const ResultBox = () => {
  return (
    <div className="absolute w-[250px] mb-10 md:w-[300px] rounded-xl -bottom-20  pb-3 bg-black ">
    <div className="bg-white border-black border-2 p-2 rounded-xl flex flex-col justify-center items-center">
      <p className="text-normal">PLAYER 2</p>
      <h1 className="text-3xl font-bold my-px">WIN</h1>
      <div className="bg-kayan px-4 py-[3px] text-white rounded-lg cursor-pointer">
        Play Again
      </div>
    </div>
  </div>
  )
}

export default ResultBox