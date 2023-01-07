import gsap from "gsap";

///intro
const slotAnimation = () => {
  gsap.fromTo(
    ".slot-inner",
    {
      yPercent: -200,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      delay: 1,
      ease: "power2.in",
    }
  );
};

// display which are connected
export const completedAnimation = (row: number, col: number) => {
  gsap.to(`.star-${row}-${col}`, {
    opacity: 1,
  });
};

// drop animation
const tl = gsap.timeline({ defaults: { duration: 0.1, ease: "sine.out" } });

export const discAnimation = (row: number, col: number, turn: string) => {
  const alternateColor = turn === "p1" ? "#f686bd" : "#ffe44d";
  const finalClass = `.disc-${row}-${col}`;
  for (let x = 0; x < row; x++) {
    let dynamicClass = `.disc-${x}-${col}`;
    tl.from(dynamicClass, {
      yPercent: -200,
      backgroundColor: alternateColor,
    });
    tl.to(
      dynamicClass,
      {
        opacity: 1,
        yPercent: 0,
        backgroundColor: alternateColor,
      },
      "<"
    );
    tl.to(
      dynamicClass,
      {
        //  opacity:0,
        yPercent: 100,
      },
      ">"
    );

    tl.to(
      dynamicClass,
      {
        opacity: 0,
      },
      ">"
    );

    tl.to(
      dynamicClass,
      {
        //  opacity:0,
        yPercent: -200,
      },
      ">"
    );
  }
  tl.to(
    finalClass,
    {
      opacity: 1,
      yPercent: 0,
      backgroundColor: alternateColor,
    },
    ">"
  );
};

// restart timeline
const restartTl = gsap.timeline();
export const restartAnimation = (completeAnimation: any) => {
  restartTl
    .to(".star", {
      opacity: 0,
      duration: 0.1,
    })
    .to(".disc", {
      yPercent: 100,
      opacity: 0,
      // duration: 0.1,
      onComplete: completeAnimation,
    });
};

export default slotAnimation;
