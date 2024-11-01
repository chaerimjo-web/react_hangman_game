import React from "react";
import Letter from "./Letter";
//a-z 알파벳 키보드 판 -> 배열에 담기 -> 버튼컴포넌트에 일 시키기

const ButtonGrid = ()=>{
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];
  
    return (
      <div className="App">
        
        {letters}
  
      </div>
      );
  }
  export default ButtonGrid;