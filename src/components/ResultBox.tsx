import React from "react";

interface ResultBoxProps {
  p1Score: number;
  p2Score: number;
  isCpu: boolean;
  playAgain: () => void;
}

const ResultBox = ({ p1Score, p2Score, isCpu, playAgain }: ResultBoxProps) => {
  const winner =
    p1Score > p2Score ? "PLAYER 1" : isCpu ? "COMPUTER" : "PLAYER 2";
  const status = p1Score === p2Score ? "Draw" : "Win";

  return (
    <div className="absolute w-[250px] -bottom-[120px] mb-10 md:w-[300px] rounded-xl md:-bottom-24  pb-3 bg-black ">
      <div className="bg-white border-black border-2 p-2 rounded-xl flex flex-col justify-center items-center">
        {status !== "Draw" && <p className="text-normal">{winner}</p>}
        <h1 className="text-3xl font-bold my-px">{status}</h1>
        <div
          onClick={playAgain}
          className="bg-kayan px-4 py-[3px] text-white rounded-lg cursor-pointer"
        >
          Play Again
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
