import React from "react";
import { AiOutlineSmile } from "react-icons/ai";
import { RiGhostSmileLine } from "react-icons/ri";

interface CategoryPops {
  background: string;
  label: string;
  isRule?: boolean;
  isCpu?: boolean;
  onClick?:()=>void
}

const Category = ({
  background,
  label,
  isRule = false,
  isCpu = false,
  onClick=()=>{}
}: CategoryPops) => {
  return (
   
      <div onClick={onClick} className="category  bg-black h-[65px] cursor-pointer my-5 rounded-xl relative" >
        <div
          className={`${background} w-full overflow-hidden flex px-3 justify-between items-center border-4 border-black h-[65px] rounded-xl absolute bottom-2`}
        >
          <h1 className="font-bold category-label">{label} </h1>
          {!isRule && (
            <div className="flex category-emoji">
              <AiOutlineSmile size={35} className="-mr-3" />
              {isCpu ? (
                <RiGhostSmileLine size={35} />
              ) : (
                <AiOutlineSmile size={35} />
              )}
            </div>
          )}
        </div>
      </div>
   
  );
};

export default Category;
