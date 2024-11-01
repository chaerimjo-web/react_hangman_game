import React, { useEffect, useState } from "react";
import Letter from "./Letter";
//글 자 하 나 하 나 만 들 어 주 는 

const LetterGrid = ({secretWord, guessedLetters, answerLength, complete})=>{
  //let letters = secretWord.split('').map(letter=><span>{letter}</span>);
  const [answer, setAnswer] = useState(0);


  //answer의 값이 변경되면 answerLength와 비교해서 정답여부 파악하기
  useEffect(()=>{
    if(answerLength>0 && answer === answerLength){
      alert('정답입니다~~~');
      complete();
    }
  },[answer, answerLength, complete]);


  //guessedLetters의 값이 변경되면 answer를 업데이트
  useEffect(()=>{
    //일치할 때 마다 reducer활용 -> 1씩 누적 ->answer에 반영
    let newCount = [...secretWord].reduce((count,letter)=>{
      return count + (guessedLetters.includes(letter.toLowerCase())? 1:0);
    },0); //누적된 값? | 0->초깃값


    setAnswer(newCount);
    console.log('실행', newCount);
  },[guessedLetters, secretWord])

  let letters = [...secretWord].map((letter, idx)=>{
    //let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    let isShown = guessedLetters.includes(letter.toLowerCase());
    //isshown이 트루면은 setAnswer로 인해서 answer를 1씩올림
    return(
    <Letter key={idx} value={letter} isShown={isShown}></Letter>
  )
});
  /*
  secretWord의 문자열을 배열로 변환하고, 그 배열에서 각각의 값으로
  <span></span> letters에 담음
  */
  return (
    <div className="letters">
      {letters}
    </div>
    );
  }
  export default LetterGrid; 