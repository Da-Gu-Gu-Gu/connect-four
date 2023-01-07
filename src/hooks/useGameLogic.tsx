import { Dispatch, SetStateAction, useState } from "react";
import { completedAnimation } from "../animations";

// const board = [
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
// ];

const useGameLogic = () => {
  // Constants for the number of rows and columns
  const ROWS = 6;
  const COLUMNS = 7;

  const [turn, setTurn] = useState<"p1" | "p2" | "cpu">("p1");

  const getConnectFourScore = (
    board: string[][],
    scoreForPlayer: Dispatch<SetStateAction<number>>
  ) => {
    let tempScore = 0;
    // Check for a horizontal win
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS - 3; col++) {
        if (
          board[row][col] !== " " &&
          board[row][col] === turn &&
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
        ) {
          tempScore += 10;
          for (let i = col; i <= col + 3; i++) {
            completedAnimation(row, i);
          }

          // break; // if break , this will not count completed score anymore so this is optional
        }
      }
    }

    // Check for a vertical win
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (
          board[row][col] !== " " &&
          board[row][col] === turn &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 2][col] &&
          board[row][col] === board[row + 3][col]
        ) {
          tempScore += 10;

          for (let i = row; i <= row + 3; i++) {
            completedAnimation(i, col);
          }
        }
      }
    }

    // Check for a diagonal win (top-left to bottom-right)
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = 0; col < COLUMNS - 3; col++) {
        if (
          board[row][col] !== " " &&
          board[row][col] === turn &&
          board[row][col] === board[row + 1][col + 1] &&
          board[row][col] === board[row + 2][col + 2] &&
          board[row][col] === board[row + 3][col + 3]
        ) {
          tempScore += 10;
          let three = 0;
          while (three <= 3) {
            completedAnimation(row + three, col + three);
            three++;
          }
        }
      }
    }

    // Check for a diagonal win (top-right to bottom-left)
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = COLUMNS - 1; col >= 3; col--) {
        if (
          board[row][col] !== " " &&
          board[row][col] === turn &&
          board[row][col] === board[row + 1][col - 1] &&
          board[row][col] === board[row + 2][col - 2] &&
          board[row][col] === board[row + 3][col - 3]
        ) {
          tempScore += 10;
          let three = 0;
          while (three <= 3) {
            completedAnimation(row + three, col + three * -1);
            three++;
          }
        }
      }
    }

    scoreForPlayer(tempScore);
  };

  return {
    // board,
    turn,
    setTurn,
    getConnectFourScore,
  };
};

export default useGameLogic;
