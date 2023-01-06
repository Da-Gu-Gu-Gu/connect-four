import gsap from "gsap";

const slotAnimation=()=>{ ///intro

    gsap.fromTo('.slot-inner',{
      yPercent:-200,
      opacity:0,
    },{
      yPercent:0,
      opacity:1,
      duration:0.5,
      stagger:0.05,
      delay:1,
      ease: "power2.in",
    })
  }


  const tl = gsap.timeline({ defaults: { duration: 0.2,ease:'sine.out' } });

  export const discAnimation = (row: number, col: number, turn: string) => {
    const alternateColor = turn === "p1" ? "#f686bd" : "#ffe44d";
    const finalClass = `.disc-${row}-${col}`;
    for (let x = 0; x <= row; x++) {
      let dynamicClass = `.disc-${x}-${col}`;
      tl.from(dynamicClass, {
        yPercent: -200,
        backgroundColor: alternateColor,
      });
      tl.to(
        dynamicClass,
        {
          opacity:1,
          yPercent:0,
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
           opacity:0,
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
        opacity:1,
        yPercent:0,
        backgroundColor: alternateColor,

      },
      ">"
    );
  };

  export default slotAnimation