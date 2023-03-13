
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';


import Board from './Board.js'




export default function Game () {
  
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
      console.log(xIsNext);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
      setXIsNext(nextMove % 2 === 0);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      
      description = 'Go to move #' + move;
  
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
   
    return (
  
      <>
      <div className='GameBoard'>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='GameHistory'>
      <ol>{moves}</ol>
      </div>
      </>
    )
  }
  