import React from "react";
import { AiOutlineSmile } from "react-icons/ai";
import { RiGhostSmileLine } from "react-icons/ri";

interface Props {
  score: number;
}

interface RightProps extends Props {
  name: string;
  isCpu: boolean;
}

const PlayerCardMobile = ({ score }: Props) => {
  return (
    <div className="md:w-[200px] player w-[130px] bg-black pb-2 border-2 border-black rounded-xl">
      <div className="md:w-[200px] w-[130px] h-[70px] border-2 border-black flex  j items-center bg-white rounded-xl ">
        <AiOutlineSmile size={45} className="bg-panyaung rounded-full -ml-5 " />
        <div className="flex md:flex-row flex-col w-full justify-around items-center">
          <p className="font-bold">PLAYER 1</p>
          <h1 className="font-bold text-3xl">{score}</h1>
        </div>
      </div>
    </div>
  );
};

export const PlayerCardMobileRight = ({ score, name, isCpu }: RightProps) => {
  return (
    <div className="md:w-[200px] player-right w-[130px] bg-black pb-2 border-2 border-black rounded-xl">
      <div className="md:w-[200px] w-[130px] h-[70px] border-2 border-black flex  j items-center bg-white rounded-xl ">
        <div className="flex md:flex-row flex-col-reverse w-full justify-around items-center">
          <h1 className="font-bold text-3xl">{score}</h1>
          <p className="font-bold">{name}</p>
        </div>
        {isCpu ? (
          <RiGhostSmileLine
            size={45}
            className="bg-awar rounded-full  -mr-5 md:-mr-8 "
          />
        ) : (
          <AiOutlineSmile
            size={45}
            className="bg-awar rounded-full -mr-5 md:-mr-8 "
          />
        )}
      </div>
    </div>
  );
};

export default PlayerCardMobile;
