import React, { useEffect, useState } from 'react';

const Square = ({circleTurn,setCircleTurn}) => {
    const [squareTurn,setSquareTurn] = useState("x")
    const handleTurn=(e)=>{
        console.log(circleTurn)
        circleTurn? setSquareTurn("circle"):setSquareTurn("x")
        e.target.classList.add(squareTurn);
        circleTurn = !circleTurn;
        setCircleTurn(circleTurn)
        console.log(circleTurn)
        

    }
  return(
      <div className='cell' onClick={(e) => handleTurn(e)}>

      </div>
      
      ) ;
};

export default Square;
