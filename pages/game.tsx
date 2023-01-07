import Link from "next/link";
import PlayerCard from "../src/components/PlayerCard";
import PlayerCardMobile, {
  PlayerCardMobileRight,
} from "../src/components/PlayerCardMobile";
import Seo from "../src/components/Seo";
import Slot from "../src/components/Slot";
import { useEffect, useState } from "react";
import {
  discAnimation,
  menuAnimation,
  slotAnimation,
  timerAnimation,
} from "../src/animations";
import playerAnimation from "../src/animations/player";
import useGameLogic from "../src/hooks/useGameLogic";
import Timer from "../src/components/Timer";
import ResultBox from "../src/components/ResultBox";
import { useRouter } from "next/router";
import RandomCol from "../src/utils/RandomCol";

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
  const [timer, setTimer] = useState(30);
  const [gameisFinished, setGameisFinished] = useState(false);

  const router = useRouter();
  const { isCpu } = router.query;

  const { turn, setTurn, getConnectFourScore } = useGameLogic();

  useEffect(() => {
    menuAnimation();
    playerAnimation();
    slotAnimation();
    timerAnimation();
  }, []);

  // we need to implement to computer play random and check whose turn it is?
  // computer drop a dics dynamic time delay

  const boardConfig = (col: number) => {
    for (let i = 5; i >= 0; i--) {
      if (board[i][col] === " ") {
        board[i][col] = turn;
        const scoreCheck = turn === "p1" ? setP1Score : setP2Score;

        const turnCheck = turn === "p1" ? "p2" : "p1";
        discAnimation(i, col, turn);
        setTimeout(() => {
          getConnectFourScore(board, scoreCheck);
        }, 1000);

        setTurn(turnCheck);
        console.log(board);
        break;
      }
    }
  };

  useEffect(() => {
    setTimer(30);
    setGameisFinished(board.every((inner) => inner.every((x) => x !== " ")));
    // check is turn is not p1 and isCpu is true , run boardConfig
    if (turn !== "p1" && !!isCpu) {
      setTimeout(async () => {
        let randomCol = undefined;
        // while (!randomCol) {
        randomCol = RandomCol(0, 6, board);
        // } //need to check col is full or not if full reRandom
        console.log("cpudropCol", randomCol);
        boardConfig(randomCol);
      }, 2000);
    }
  }, [turn]);

  // console.log("isOver", gameisFinished);

  return (
    <>
      <Seo />
      <main className="bg-kayan  w-screen  min-h-screen  h-max flex justify-center items-center">
        <div className=" flex w-[100%] md:w-[90%] justify-around items-center p-3 ">
          <div className="lg:block hidden">
            <PlayerCard name="Player 1" score={p1Score} />
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
              <PlayerCardMobile score={p1Score} />
              <PlayerCardMobileRight
                isCpu={!!isCpu}
                name={!!isCpu ? "Computer" : "PLAYER 2"}
                score={p2Score}
              />
            </div>
            {/* game */}
            <div className=" md:w-[700px]  w-[375px] h-max pb-3  mt-5 ">
              <div className="flex justify-center  bg-kayan   ">
                {[0, 1, 2, 3, 4, 5, 6].map((col) => {
                  return (
                    <div
                      onClick={() => boardConfig(col)}
                      key={col}
                      // here need to change cursor
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
                      return <Slot row={i} col={j} key={j.toString()} />;
                    });
                  })}

                  {gameisFinished ? (
                    <ResultBox
                      p1Score={p1Score}
                      p2Score={p2Score}
                      isCpu={!!isCpu}
                    />
                  ) : (
                    <Timer
                      turn={turn}
                      timer={timer}
                      setTimer={setTimer}
                      isCpu={!!isCpu}
                      setTurn={setTurn}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <PlayerCard
              name={!!isCpu ? "Computer" : "Player 2"}
              score={p2Score}
              isCpu={!!isCpu}
            />
          </div>
        </div>
      </main>
    </>
  );
}
