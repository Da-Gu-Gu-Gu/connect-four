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
import { restartAnimation } from "../src/animations/slot";

let board = [
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
];

export default function Game() {
  const InitalBoard = [
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
  ];

  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameisFinished, setGameisFinished] = useState(false);
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  const router = useRouter();
  const { isCpu } = router.query;

  const { turn, setTurn, getConnectFourScore } = useGameLogic();

  useEffect(() => {
    menuAnimation();
    playerAnimation();
    slotAnimation();
    timerAnimation();
  }, []);

  const goBackHome = () => {
    // reset board data
    board = InitalBoard;
  };

  const Restart = () => {
    board = InitalBoard;
    setTurn("p1");
    setGameisFinished(false);
    setIsComputerTurn(false);
    setP1Score(0);
    setP2Score(0);
    setTimer(30);
    // ui reset
    restartAnimation(slotAnimation());
  };

  // Game Play
  const boardConfig = (col: any) => {
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
        break;
      }
    }
  };

  useEffect(() => {
    setTimer(30);
    setGameisFinished(board.every((inner) => inner.every((x) => x !== " ")));
    // check is turn is not p1 and isCpu is true , run boardConfig
    setIsComputerTurn(false);
    // Computer Game Play
    if (turn !== "p1" && !!isCpu && !gameisFinished) {
      setIsComputerTurn(true);
      setTimeout(async () => {
        let randomCol = RandomCol(0, 6, board);
        // Check SelectedColumn is Full or not
        if (randomCol === undefined) {
          for (let i = 0; i <= 6; i++) {
            let isAlreadFull =
              board.filter((inner) => {
                return inner[i] === " ";
              }).length < 1;
            if (!isAlreadFull) {
              randomCol = i;
              break;
            }
          }
        }
        boardConfig(randomCol);
      }, 3000);
    }
    // End Computer Game Play
  }, [turn]);

  return (
    <>
      <Seo />
      <main className="bg-kayan  w-screen  min-h-screen  h-max flex justify-center items-center">
        <div className=" flex w-[100%] md:w-[90%] justify-around items-center p-3 ">
          <div className="lg:block hidden">
            {/* Player Card for larger Screen */}
            <PlayerCard name="Player 1" score={p1Score} />
          </div>
          {/* playground */}
          <div className=" p-3 flex-col justify-center items-center h-screen">
            {/* menu bar */}
            <div className="flex justify-between items-center p-3">
              <Link href={"/"}>
                <div
                  onClick={goBackHome}
                  className="cursor-pointer menu-btn flex bg-violet-800 py-2 px-5 rounded-lg text-white"
                >
                  {["H", "o", "m", "e"].map((x) => {
                    return (
                      <p key={x} className="menu">
                        {x}
                      </p>
                    );
                  })}{" "}
                </div>
              </Link>

              <div
                onClick={() => Restart()}
                className="cursor-pointer menu-btn flex bg-violet-800 py-2 px-5 rounded-lg text-white"
              >
                {["R", "e", "s", "t", "a", "r", "t"].map((x, i) => {
                  return (
                    <p key={i} className="menu">
                      {x}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* PlayerCard for small screen */}
            <div className="flex justify-between mt-3 mb-5 lg:hidden ">
              <PlayerCardMobile score={p1Score} />
              <PlayerCardMobileRight
                isCpu={!!isCpu}
                name={!!isCpu ? "Computer" : "PLAYER 2"}
                score={p2Score}
              />
            </div>
            {/* end playercard smaller */}
            {/* game */}
            <div className=" md:w-[700px]  w-[375px] h-max pb-3  mt-5 ">
              <div className="flex justify-center  bg-kayan   ">
                {/* Tab Indicator */}
                {[0, 1, 2, 3, 4, 5, 6].map((col) => {
                  return (
                    <div
                      onClick={() => !isComputerTurn && boardConfig(col)}
                      key={col}
                      className={`md:w-[70px] opacity-0 hover:opacity-100 ${
                        isComputerTurn ? "cursor-not-allowed" : "cursor-pointer"
                      } transition-all tab md:h-[70px] p-[2px] pt-[4px] w-[35px] h-[35px] mx-[7px]  md:m-3  bg-black flex justify-center `}
                    >
                      <div
                        className={`md:w-[70px] tab md:h-[70px]  w-[35px] h-[35px] tab ${
                          turn === "p1" ? "bg-panyaung" : "bg-awar"
                        } `}
                      ></div>
                    </div>
                  );
                })}
                {/* End Tab indicator */}
              </div>
              <div className="md:w-[700px]  bg-black w-[375px] h-max pb-3  rounded-xl">
                <div className=" bg-white relative md:w-[700px] w-[375px]  justify-center  pb-14 md:pb-20 border-2 border-black rounded-xl flex flex-wrap">
                  {/* PlayGround */}
                  {board.map((x, i) => {
                    return x.map((y, j) => {
                      return <Slot row={i} col={j} key={j.toString()} />;
                    });
                  })}
                  {/* End PlayGround */}

                  {/* Result And Timer */}
                  {gameisFinished ? (
                    <ResultBox
                      p1Score={p1Score}
                      p2Score={p2Score}
                      isCpu={!!isCpu}
                      playAgain={Restart}
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
            {/* Player Card for larger Screen */}
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
