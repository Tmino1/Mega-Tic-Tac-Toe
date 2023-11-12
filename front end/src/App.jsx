import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Tile({ value }){
  return (
    <button className='tile'>{value}</button>
  )
}

function MediumBoard({id}){
  return (
    <>
    <div className='med-row'>
      <Tile value='0' />
      <Tile value='1' />
      <Tile value='2' />
    </div>
    <div className='med-row'>
      <Tile value='3' />
      <Tile value='4' />
      <Tile value='5' />
    </div>
    <div className='med-row'>
      <Tile value='6' />
      <Tile value='7' />
      <Tile value='8' />
      
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
        <MediumBoard id='9'/>
        <MediumBoard id='9*2'/>
        <MediumBoard id='9*3'/>
        
    </div>

    <div className='big-row'>
        <MediumBoard id='9*4' />
        <MediumBoard id='9*5'/>
        <MediumBoard id='9*6'/>
    </div>
    <div className='big-row'>
        <MediumBoard id='9*7'/>
        <MediumBoard id='9*8'/>
        <MediumBoard id='9*9'/>
    </div>
    </div>
    </>
    
  )
}


export default BigBoard