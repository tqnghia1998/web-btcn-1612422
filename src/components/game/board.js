import React from 'react';
import Square from './square';
import Config from '../../constants/configs';

function checkWinCell(winCells, row, col) {
    if (winCells == null) {
        return false;
    }

    for (let i = 0; i < winCells.length; i += 1) {
        const curCell = winCells[i];
        if (curCell[0] === row && curCell[1] === col) {
            return true;
        }
    }
    return false;
}

function Board (props) {
    const squaresDiv = [];
    for (let i = 0; i < props.squares.length; i += 1) {
        for (let j = 0; j < props.squares[i].length; j += 1) {
            const squareKey = i * Config.brdSize + j;
            squaresDiv.push(<Square winCell={checkWinCell(props.winCells, i, j)}
                value={props.squares[i][j]}
                row={i}
                col={j}
                handleClick={(row, col) => props.handleClick(row, col)}
                key={squareKey}/>);
        }
    }
    return <div className='container-board'>{squaresDiv}</div>;
}

export default Board;