import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface Props{
    turn:"p1" | "p2",
    timer:number,
    setTimer:Dispatch<SetStateAction<number>>,
    setTurn:Dispatch<SetStateAction<"p1"|"p2">>
}

const Timer = ({turn,timer,setTimer,setTurn}:Props) => {

    useEffect(() => {
        let myCountdown =setInterval(() => {
        if (timer > 0) {
         
          setTimer(timer - 1); //here only need to check it is paused or not
          
        } else {
            const turnCheck = turn === "p1" ? "p2" : "p1";
            setTurn(turnCheck)
          clearInterval(myCountdown);
        }
      }, 1000);
  
  
      return () => {
        clearInterval(myCountdown);
      };
    }, [timer])

    const alternateColor = turn === "p1" ? "bg-panyaung" : "bg-awar";

  return (
    <div className="flex timer -bottom-[50px] justify-center absolute md:w-[155px] w-[100px] h-[100px] md:h-[155px] md:-bottom-[75px]  bg-black pb-3 rounded-lg clip-part">
    <div className={`clip-part ${alternateColor}  md:w-[155px] w-[100px]  flex flex-col justify-center items-center  rounded-lg`}>
      <p className="md:text-sm text-xs md:mt-0 mt-10">
      {/* here need to trigger for  cpu */}
       {turn==="p1"?'PLAYER 1s TURN':'PLAYER 2s Turn'}  
      </p>
      <h1 className="font-bold text-3xl text-white">{timer} s</h1>
    </div>
  </div>
  )
}

export default Timer