import Link from "next/link";
import PlayerCard from "../src/components/PlayerCard";
import PlayerCardMobile, {
  PlayerCardMobileRight,
} from "../src/components/PlayerCardMobile";
import Seo from "../src/components/Seo";
import Slot from "../src/components/Slot";
import { useEffect, useState } from "react";
import {
  menuAnimation,
  slotAnimation,
  timerAnimation,
} from "../src/animations";
import playerAnimation from "../src/animations/player";
import useGameLogic from "../src/hooks/useGameLogic";
import gsap from "gsap";

const board = [
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
];

export default function Game() {
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const { turn, setTurn, getConnectFourScore } = useGameLogic();
  // console.log(board[2].lastIndexOf(' ')) to push the last index of row
  // for check colums to push last index we need to loop and check 6 row is available

  useEffect(() => {
    menuAnimation();
    playerAnimation();
    slotAnimation();
    timerAnimation();
  }, []);

  // for animate we need plus ++ in row and specific columns and change bg color 

  const discAnimation=(row:number,col:number)=>{

    for(let x=0;x<row;x++){
      let dynamicClass=`.disc-${row}-${col}`
      gsap.fromTo(dynamicClass,{
        yPercent:-200,
        opacity:0,
        backgroundColor:'#a77afe'
      },{
        yPercent:0,
        opacity:1,
        backgroundColor:'#ffe44d',
        duration:0.5,
        ease: "power2.in",
      })
    }


  }


  const boardConfig = (col: number) => {
    for (let i = 5; i >= 0; i--) {
      if (board[i][col] === " ") {
        board[i][col] = turn;
        const scoreCheck = turn === "p1" ? setP1Score : setP2Score;
        getConnectFourScore(board, scoreCheck);
        const turnCheck = turn === "p1" ? "p2" : "p1";
        discAnimation(i,col)
        setTurn(turnCheck);
        console.log(board);
        break;
      }
    }
  };

  console.log("p1", p1Score);
  console.log("p2", p2Score);

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
                <div className="cursor-pointer menu-btn flex bg-violet-800 py-2 px-5 rounded-lg text-white">
                  {["H", "o", "m", "e"].map((x) => {
                    return (
                      <p key={x} className="menu">
                        {x}
                      </p>
                    );
                  })}{" "}
                </div>
              </Link>
              <Link href={"/"}>
                <div className="cursor-pointer menu-btn flex bg-violet-800 py-2 px-5 rounded-lg text-white">
                  {["R", "e", "s", "t", "a", "r", "t"].map((x, i) => {
                    return (
                      <p key={i} className="menu">
                        {x}
                      </p>
                    );
                  })}
                </div>
              </Link>
            </div>

            <div className="flex justify-between mt-3 mb-5 lg:hidden ">
              <PlayerCardMobile score={12} />
              <PlayerCardMobileRight score={22} />
            </div>
            {/* game */}
            <div className=" md:w-[700px]  w-[375px] h-max pb-3  mt-5 ">
              <div className="flex justify-center  bg-kayan   ">
                {[0, 1, 2, 3, 4, 5, 6].map((col) => {
                  return (
                    <div
                      onClick={() => boardConfig(col)}
                      key={col}
                      className="md:w-[70px] opacity-0 hover:opacity-100 cursor-pointer transition-all tab md:h-[70px] p-[2px] pt-[4px] w-[35px] h-[35px] mx-[7px]  md:m-3  bg-black flex justify-center "
                    >
                      <div className="md:w-[70px] tab md:h-[70px]  w-[35px] h-[35px] tab bg-panyaung "></div>
                    </div>
                  );
                })}
              </div>
              <div className="md:w-[700px]  bg-black w-[375px] h-max pb-3  rounded-xl">
                <div className=" bg-white relative md:w-[700px] w-[375px]  justify-center  pb-14 md:pb-20 border-2 border-black rounded-xl flex flex-wrap">
                  {board.map((x, i) => {
                    return x.map((y, j) => {
                      return <Slot row={i} col={j}  key={j.toString()} />;
                    });
                  })}

                  <div className="flex timer -bottom-[50px] justify-center absolute md:w-[155px] w-[100px] h-[100px] md:h-[155px] md:-bottom-[75px]  bg-black pb-3 rounded-lg clip-part">
                    <div className="clip-part bg-panyaung md:w-[155px] w-[100px]  flex flex-col justify-center items-center  rounded-lg">
                      <p className="md:text-sm text-xs md:mt-0 mt-10">
                        PLAYER 1s TURN
                      </p>
                      <h1 className="font-bold text-3xl text-white">30s</h1>
                    </div>
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
