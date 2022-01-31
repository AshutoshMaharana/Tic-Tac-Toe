import { useState } from 'react';
import './App.css';
import Square from './component/square';


function App() {
  const [circleTurn, setCircleTurn] = useState(false);
  const [turn,setTurn] = useState("x");
  const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  
  let board = document.getElementsByClassName('board'); // to direct access board whtout document.getEleme or any other methd to access
  let cell = document.getElementsByClassName('cell'); // same as above also to ask How to add event listener to a div

  const handleHover=(e)=>{
    board[0].classList.remove("x") 
    board[0].classList.remove("circle")
    
    circleTurn?setTurn("circle"):setTurn("x")
    board[0].classList.add(turn) // how to change class thru react
    //can i make constructor out of genretaro

  
    
   

  }
  const checkWin = (turn) =>{
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        cell[index].classList.contains(turn)

      })

    })

  }
  const startGame = () => {
   

  }

  return (
    <div className="board" onMouseOver={(e) => handleHover(e)}>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>
      <Square circleTurn= {circleTurn} setCircleTurn = {setCircleTurn}/>   
      

      
    </div>
  );
}

export default App;
