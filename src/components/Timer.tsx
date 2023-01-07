import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface Props{
    turn:"p1" | "p2" | 'cpu',
    timer:number,
    setTimer:Dispatch<SetStateAction<number>>,
    setTurn:Dispatch<SetStateAction<"p1"|"p2" | "cpu">>
    isCpu:boolean
}

const Timer = ({turn,timer,setTimer,setTurn,isCpu}:Props) => {

    useEffect(() => {
        let myCountdown =setInterval(() => {
        if (timer > 0) {
         
          setTimer(timer - 1); //here only need to check it is paused or not
          
        } else {
            const turnCheck = turn === "p1" ? "p2" : "p1";
            setTurn(turnCheck)
          clearInterval(myCountdown);
        }
      }, 2000);
  
  
      return () => {
        clearInterval(myCountdown);
      };
    }, [timer])

    const alternateColor = turn === "p1" ? "bg-panyaung" : "bg-awar";

  return (
    <div className="flex timer -bottom-[50px] justify-center absolute md:w-[155px] w-[130px] h-[110px] md:h-[155px] md:-bottom-[75px]  bg-black pb-3 rounded-lg clip-part">
    <div className={`clip-part ${alternateColor}  md:w-[155px] md:h-[150px] w-[130px] h-[105px] flex flex-col justify-center items-center  rounded-lg`}>
      <p className="md:text-sm text-sm  mt-10">
      {/* here need to trigger for  cpu */}
       {turn==="p1"?"PLAYER 1's TURN":isCpu?"CPU's TURN":"PLAYER 2's TURN"}  
      </p>
      <h1 className="font-bold text-3xl text-white">{timer} s</h1>
    </div>
  </div>
  )
}

export default Timer