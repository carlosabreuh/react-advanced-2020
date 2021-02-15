import React from 'react';

const ErrorExample = () => {
  let tittle = 'random tittle'
  const handleClick = () =>{
    tittle = 'hello people';
    console.log(tittle);

  }
  return (
  <React.Fragment>
    <h2>{tittle}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change Tittle</button>
  </React.Fragment>
  );
};

export default ErrorExample;
