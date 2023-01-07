import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { ruleOpenAnimation } from "../animations";

interface Props {
  onClick: () => void;
  open: boolean;
}

const RuleModal = ({ onClick, open }: Props) => {
  useEffect(() => {
    open && ruleOpenAnimation();
  }, [open]);

  return (
    <div
      className={`transition-all 	w-[300px]  ${
        open ? "h-max p-3 pb-10 border-2 border-black " : "h-0 overflow-hidden"
      }  z-20 bg-white relative  rounded-xl  `}
    >
      <h1 className="text-center rules-text font-bold text-2xl my-3">RULES</h1>
      <h2 className="text-kayan rules-text  font-bold mb-1">OBJECTIVE</h2>
      <p className="text-sm text-gray-600 rules-text ">
        Try to connect 4 or more than of the same colored discs in a row(either
        vertically,horizontally,or diagonally).
      </p>
      <h2 className="text-kayan font-bold my-3 rules-text ">HOW TO PLAY</h2>
      <p className="text-sm mb-2 rules-text ">
        <span className="font-bold mr-2">1.</span> Red goes first in every game.
      </p>
      <p className="text-sm mb-2 rules-text ">
        <span className="font-bold mr-2">2.</span> Players play alternate turns
        with timer and only one disc can drop in each turn.
      </p>
      <p className="text-sm mb-2 rules-text ">
        <span className="font-bold mr-2">3.</span>
        The game ends when there is no space to drop a single disc.
      </p>
      <p className="text-sm mb-2 rules-text ">
        <span className="font-bold mr-2">4.</span>
        The score for 4 disc connected is 10.If more than 4 discs, the score
        will add +10.
      </p>

      <div
        onClick={onClick}
        className="absolute cursor-pointer -bottom-4 left-1/2 -translate-x-1/2 bg-black pb-1 rounded-full"
      >
        <div className=" bg-panyaung p-3 rounded-full cross">
          <ImCross size={30} />
        </div>
      </div>
    </div>
  );
};

export default RuleModal;
