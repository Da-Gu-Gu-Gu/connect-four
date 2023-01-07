const RandomCol = (
  min: number,
  max: number,
  board: string[][]
): number | undefined => {
  let col = Math.floor(Math.random() * (max - min + 1)) + min;
  let isAlreadFull =
    board.filter((inner) => {
      return inner[col] === " ";
    }).length < 1;
  console.log("it full col", isAlreadFull);
  console.log("output col", col);
  if (!isAlreadFull) {
    return col;
  }
};

export default RandomCol;
