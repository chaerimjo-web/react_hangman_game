import React from 'react';
import Button from './Button';

const ButtonGrid = ({onclick})=>{ //매개변수로 받음 / 부모/자식에게(button.js) 받은 onclick을 넣어서
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];

  let buttons = letters.map((letter,idx)=>(
    <Button value={letter} onclick={onclick} key={idx}/> //여기서 실행한다
  ));
  
  return (
    <div className="buttons">
      {buttons}
    </div>
  );
}

export default ButtonGrid;