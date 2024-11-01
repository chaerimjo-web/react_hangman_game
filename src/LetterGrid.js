import React from "react";
import Letter from "./Letter";
//글 자 하 나 하 나 만 들 어 주 는 

const LetterGrid = ({secretWord, guessedLetters})=>{
  //let letters = secretWord.split('').map(letter=><span>{letter}</span>);
  let letters = [...secretWord].map((letter, idx)=>{
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return(
    <Letter key={idx} value={letter} isShown={isShown}></Letter>
  )
});
  /*
  secretWord의 문자열을 배열로 변환하고, 그 배열에서 각각의 값으로
  <span></span> letters에 담음
  */
    return (
      <div className="App">
        
        {letters}
  
      </div>
      );
  }
  export default LetterGrid;