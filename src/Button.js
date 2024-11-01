import React, { useState } from 'react';

const Button = ({value, onclick})=>{ //매개변수로 받음
  const [isClicked, setIsClicked] = useState(false);
  let className = '';

  if(isClicked){
    className = 'hidden';
  }
  let clickHandler = ()=>{
    setIsClicked(true)
    onclick(value); //클릭한 알파벳 
  }

  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}

export default Button;