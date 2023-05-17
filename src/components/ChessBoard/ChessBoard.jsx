import React from 'react';
import classes from './ChessBoard.module.css';
import Tile from '../Tile/Tile';

const lettersAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbersAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const pieces=[]

for (let c=0 ; c<2; c++)
{
  const color= c ===0 ? "Black" : "White"
  const yCoordinate = c ===0 ? 7 : 0
  pieces.push({image:`assets/images/Chess_${color}-Rook.png` , x:0, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Rook.png` , x:7, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Knight.png` , x:1, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Knight.png` , x:6, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Bishop.png` , x:2, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Bishop.png` , x:5, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-Queen.png` , x:3, y: yCoordinate})
  pieces.push({image:`assets/images/Chess_${color}-King.png` , x:4, y: yCoordinate})

}


for(let i=0;i<=8;i++){
pieces.push({image:"assets/images/Chess_Black-Pawn.png" , x:i, y:6})
}

for(let i=0;i<=8;i++){
  pieces.push({image:"assets/images/Chess_White-Pawn.png" , x:i, y:1})
  }



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
