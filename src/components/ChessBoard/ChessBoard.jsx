import React from 'react';
import classes from './ChessBoard.module.css';
import Tile from '../Tile/Tile';

const lettersAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbersAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const pieces=[]
pieces.push({image:"assets/images/Chess_Black-Pawn.png" , x:0, y:1})

const ChessBoard = (props) => {
  let coordinates = [];

  for (let j = numbersAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < lettersAxis.length; i++) {
      const number = j + i + 2;
      let image=undefined;


      pieces.forEach(item=>{
if(item.x===i && item.y===j)
{
  image=item.image
}
      })


      coordinates.push(<Tile image={image} number={number} lettersAxis={lettersAxis} numbersAxis={numbersAxis} i={i} j={j} />);
    }
  }

  return <div className={classes.chessboard}>{coordinates}</div>;
};

export default ChessBoard;
