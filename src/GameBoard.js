import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';
/*
function GameBoard(props) {
  return (
    <div className="App">
     <h1>{props.secretWord}</h1>
     
    </div>
  );
}
*/

/*
function GameBoard({secretWord}) {
  return (
    <div className="App">
     <h1>{secretWord}</h1>
     
    </div>
  );
}
*/
const GameBoard = ({secretWord, maxError, answerLength})=>{
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0); //틀린 횟수

  //클릭 -> clickHandler실행
  let clickHandler = (value)=>{ //클릭한 알파벳 -> value
    let val = value.toLowerCase(); //소문자로

    setGuessedLetters(prev=>[...prev,val]); 

    if(secretWord.indexOf(val) === -1){
      setErrorCount(errorCount+1);
    }
  }
  let reset = () =>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item=>item.classList.remove('hidden'));
  }
  return (
    <>
    {errorCount<maxError ?
      <div className={secretWord ? '' : 'hidden'}>
      {/* secretWord 값 있으면 x : 없으면 안보이게*/}
        틀린 횟수 : {errorCount} / {maxError}
        {/*errorCount가 maxError보다 작을 때는 버튼그리드 출력*/}
        <LetterGrid secretWord={secretWord} complete={(reset)} guessedLetters={guessedLetters} answerLength={answerLength}/> 
        <ButtonGrid onclick={clickHandler}/>
      </div>
      :
      <button className={secretWord ? '' : 'hidden'} onClick={reset}>Retry</button>
      }
    </>
  );
}

export default GameBoard;