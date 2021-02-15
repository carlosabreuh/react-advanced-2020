import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0]
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('Random Tittle');
  
  const handleClick = () => {
    if (text === 'random tittle') {
      setText('Hello World');
    } else {
      setText('random tittle');
    }
  };
  
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Tittle
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
