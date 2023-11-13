import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Tile({ value, onSquareClick }){
  
  return (
    <button 
    className='tile' onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

function MediumBoard({id}){
  const [squares, setSquares] = useState(Array(91).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = i;
    setSquares(nextSquares);
  }
  
  return (
    <>
    <div className='med-board'>
    <div className='med-row'>
      <Tile value={squares[1 + 9*id]} onSquareClick={() => handleClick(1 + 9*id)}/>
      <Tile value={squares[2 + 9*id]} onSquareClick={() => handleClick(2 + 9*id)}/>
      <Tile value={squares[3 + 9*id]} onSquareClick={() => handleClick(3 + 9*id)}/>
    </div>
    <div className='med-row'>
      <Tile value={squares[4 + 9*id]} onSquareClick={() => handleClick(4 + 9*id)}/>
      <Tile value={squares[5 + 9*id]} onSquareClick={() => handleClick(5 + 9*id)}/>
      <Tile value={squares[6 + 9*id]} onSquareClick={() => handleClick(6 + 9*id)}/>
    </div>
    <div className='med-row'>
      <Tile value={squares[7 + 9*id]} onSquareClick={() => handleClick(7 + 9*id)}/>
      <Tile value={squares[8 + 9*id]} onSquareClick={() => handleClick(8 + 9*id)}/>
      <Tile value={squares[9 + 9*id]} onSquareClick={() => handleClick(9 + 9*id)}/>
    </div>
    </div>
    </>
  )
}

function BigBoard(){
  
  return ( 
    <>
    <div className='board'>
    
    <div>
      <h2>Mega Tic-Tac-Toe</h2>
    </div>

    <div className='big-row'>
        <MediumBoard id={1}/>
        <MediumBoard id={2}/>
        <MediumBoard id={3}/>
        
    </div>
    <div className='big-row'>
        <MediumBoard id={4} />
        <MediumBoard id={5}/>
        <MediumBoard id={6}/>
    </div>
    <div className='big-row'>
        <MediumBoard id={7}/>
        <MediumBoard id={8}/>
        <MediumBoard id={9}/>
    </div>
    </div>
    </>
    
  )
}


export default BigBoard