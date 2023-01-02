import Link from "next/link";

import PlayerCard from "../src/components/PlayerCard";
import Seo from "../src/components/Seo";
import Slot from "../src/components/Slot";

export default function Game() {
  const board = [
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
  ];

  return (
    <>
      <Seo />
      <main className="bg-kayan h-screen overflow-hidden w-screen flex justify-center items-center">
        <div className=" flex w-[90%] justify-around items-center p-3 ">
          <PlayerCard name="Player 1" score={20} />
          <div className=" p-3 flex-col items-center h-screen">
            {/* menu bar */}
            <div className="flex justify-between items-center p-3">
              <Link href={"/"}>
                <h1 className="cursor-pointer bg-violet-800 py-2 px-5 rounded-lg text-white">
                  Home
                </h1>
              </Link>
              <Link href={"/"}>
                <h1 className="cursor-pointer bg-violet-800 py-2 px-5 rounded-lg text-white">
                  Restart
                </h1>
              </Link>
            </div>

            {/* game */}
            <div className=" w-[700px] h-max bg-black pb-3  rounded-xl">
            <div className=" bg-white relative w-[700px] justify-center p-3 pb-20 border-2 border-black rounded-xl flex flex-wrap">
              {board.map((x, i) => {
               return x.map((y, j) => {
                  return (<Slot key={j.toString()} />)
                });
              })}


              <div className="flex justify-center absolute w-[155px] h-[155px] -bottom-[75px]  bg-black pb-3 rounded-lg clip-part">
              <div className="clip-part bg-panyaung w-[155px] h-[155px] flex flex-col justify-center items-center  rounded-lg">
                <p className="text-sm">PLAYER 1s TURN</p>
                <h1 className="font-bold text-3xl text-white">30s</h1>
              </div>
                
              </div>

            </div>
            </div>
   
          </div>
          <PlayerCard name="Player 2" score={30} isCpu={true} />
        </div>
      </main>
    </>
  );
}
