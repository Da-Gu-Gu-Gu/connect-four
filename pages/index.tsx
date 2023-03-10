import Link from "next/link";
import { useEffect, useState } from "react";
import { homeAnimation } from "../src/animations";
import Category from "../src/components/Category";
import RuleModal from "../src/components/RuleModal";
import Seo from "../src/components/Seo";

export default function Home() {
  useEffect(() => homeAnimation(), []);

  const [ruleOpen, setRuleOpen] = useState<boolean>(false);

  const ruleHandler = () => {
    setRuleOpen((prev) => !prev);
  };

  return (
    <>
      <Seo />

      <main className="w-screen min-h-screen">
        <div className="bg-kayan h-screen w-screen flex justify-center items-center">
          <div className="md:w-[500px] w-[90%] p-3">
            <Link href={"/game?isCpu=true"}>
              <Category
                background="bg-panyaung"
                label="PLAYER VS CPU"
                isCpu={true}
              />
            </Link>
            <Link href={"/game/"}>
              <Category background="bg-awar" label="PLAYER VS PLAYER" />
            </Link>
            <Category
              onClick={ruleHandler}
              background="bg-white"
              label="GAME RULES"
              isRule={true}
            />
          </div>
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <RuleModal onClick={ruleHandler} open={ruleOpen} />
        </div>
      </main>
      <footer>
        <p className="text-center -mt-10 flex items-center justify-center">
          🖥️ Developed By{" "}
          <Link href="https://github.com/Da-Gu-Gu-Gu">
            <span className="cursor-pointer text-white bg-black/40 rounded-lg px-2 py-1 ml-1">
              Da-Gu-Gu-Gu
            </span>
          </Link>
        </p>
      </footer>
    </>
  );
}
