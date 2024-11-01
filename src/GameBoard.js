import React from "react";
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
/*
function GameBoard(props) {
  return (
    <div className="App">
      <h1>{props.secretWord}</h1>
    </div>
  );
}
*/
const GameBoard = ({secretWord})=>{
  return (
    <div className="App">

    <LetterGrid secretWord={secretWord} guessedLetters={['a','e']}/>
    <ButtonGrid/>
    </div>
    );
}
export default GameBoard;
