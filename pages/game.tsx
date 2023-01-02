import Link from "next/link";

import PlayerCard from "../src/components/PlayerCard";
import PlayerCardMobile from "../src/components/PlayerCardMobile";
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
      <main className="bg-kayan  w-screen  min-h-screen  h-max flex justify-center items-center">
        <div className=" flex w-[100%] md:w-[90%] justify-around items-center p-3 ">
          <div className="lg:block hidden">
          <PlayerCard name="Player 1" score={20} />
          </div>
          {/* playground */}
          <div className=" p-3 flex-col justify-center items-center h-screen">
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

            
            <div className="flex justify-between mt-3 mb-5 lg:hidden ">
            
            <PlayerCardMobile />
            <PlayerCardMobile />

         

            </div>
{/* game */}
            <div className=" md:w-[700px]  w-[375px] h-max bg-black pb-3  mt-5 rounded-xl">
            <div className=" bg-white relative md:w-[700px] w-[375px]  justify-center  pb-14 md:pb-20 border-2 border-black rounded-xl flex flex-wrap">
              {board.map((x, i) => {
               return x.map((y, j) => {
                  return (<Slot key={j.toString()} />)
                });
              })}


              <div className="flex -bottom-[50px] justify-center absolute md:w-[155px] w-[100px] h-[100px] md:h-[155px] md:-bottom-[75px]  bg-black pb-3 rounded-lg clip-part">
              <div className="clip-part bg-panyaung md:w-[155px] w-[100px]  flex flex-col justify-center items-center  rounded-lg">
                <p className="md:text-sm text-xs md:mt-0 mt-10">PLAYER 1s TURN</p>
                <h1 className="font-bold text-3xl text-white">30s</h1>
              </div>
                
              </div>

            </div>
            </div>
   
          </div>
          <div className="lg:block hidden">
          <PlayerCard name="Player 2" score={30} isCpu={true} />
          </div>
        </div>
      </main>
    </>
  );
}
