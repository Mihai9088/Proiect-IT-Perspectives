import React from 'react';
import classes from './ChessBoard.module.css';
import Tile from '../Tile/Tile';
import {useRef, useState, useEffect} from 'react';

const lettersAxis = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h'
];
const numbersAxis = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
];

const initialBoardState = [];
for (let c = 0; c < 2; c++) {
    const color = c === 0
        ? "Black"
        : "White"
    const yCoordinate = c === 0
        ? 7
        : 0
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Rook.png`, x: 0, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Rook.png`, x: 7, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Knight.png`, x: 1, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Knight.png`, x: 6, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Bishop.png`, x: 2, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Bishop.png`, x: 5, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-Queen.png`, x: 3, y: yCoordinate}
    )
    initialBoardState.push(
        {image: `assets/images/Chess_${color}-King.png`, x: 4, y: yCoordinate}
    )

}

for (let i = 0; i <= 8; i++) {
    initialBoardState.push(
        {image: "assets/images/Chess_Black-Pawn.png", x: i, y: 6}
    )
}

for (let i = 0; i <= 8; i++) {
    initialBoardState.push(
        {image: "assets/images/Chess_White-Pawn.png", x: i, y: 1}
    )
}

const ChessBoard = (props) => {
    const [grabbedPiece, setGrabbedPiece] = useState(null)
    const [gridX, setGridX] = useState(0)
    const [gridY, setGridY] = useState(0)
    const [pieces, setPieces] = useState(initialBoardState)
    let coordinates = [];
    const boardRef = useRef(null)

    const getPiece = (e) => {
        const item = e.target;
        const board = boardRef.current;
        if (item.classList.contains('Tile_Pieces__UgLJp') && board) {
            const gridX = Math.floor((e.clientX - board.offsetLeft) / 100)
            const gridY = Math.abs(Math.ceil((e.clientY - board.offsetTop - 800) / 100))
            setGridX(gridX)
            setGridY(gridY)
            const xCoordinate = e.clientX - 50;
            const yCoordinate = e.clientY - 50;
            item.style.position = 'absolute';
            item.style.left = `${xCoordinate}px`;
            item.style.top = `${yCoordinate}px`;
            setGrabbedPiece(item)
        }
    };

    const movePiece = (e) => {
        const board = boardRef.current;
        if (grabbedPiece && board) {
            const minX = board.offsetLeft - 25;
            const minY = board.offsetTop - 25;
            const maxX = board.offsetLeft + board.clientWidth - 75;
            const maxY = board.offsetTop + board.clientHeight - 75;
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            grabbedPiece.style.position = "absolute";

            if (x < minX) {
                grabbedPiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                grabbedPiece.style.left = `${maxX}px`;
            } else {
                grabbedPiece.style.left = `${x}px`;
            }

            if (y < minY) {
                grabbedPiece.style.top = `${minY}px`;
            } else if (y > maxY) {
                grabbedPiece.style.top = `${maxY}px`;
            } else {
                grabbedPiece.style.top = `${y}px`;
            }
        }

    };

    const dropPiece = (e) => {
        const board = boardRef.current;
        if (grabbedPiece && grabbedPiece.classList.contains('Tile_Pieces__UgLJp') && board) {
            const x = Math.floor((e.clientX - board.offsetLeft) / 100)
            const y = Math.abs(Math.ceil((e.clientY - board.offsetTop - 800) / 100))
            setPieces(value => {
                const pieces = value.map(p => {
                    if (p.x === gridX && p.y === gridY) {
                        p.x = x
                        p.y = y
                    }
                    return p
                })
                return pieces
            })
            setGrabbedPiece(null)
        }
    }

    for (let j = numbersAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < lettersAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;

            pieces.forEach(item => {
                if (item.x === i && item.y === j) {
                    image = item.image
                }
            })

            coordinates.push(
                <Tile
                    key={`${i} , ${j}`}
                    image={image}
                    number={number}
                    lettersAxis={lettersAxis}
                    numbersAxis={numbersAxis}
                    i={i}
                    j={j}/>
            );
        }
    }

    return (
        <div
            onMouseMove={(e) => movePiece(e)}
            onMouseDown={(e) => getPiece(e)}
            onMouseUp={(e) => dropPiece(e)}
            className={classes.chessboard}
            ref={boardRef}>
            {coordinates}
        </div>
    );
};

export default ChessBoard;
