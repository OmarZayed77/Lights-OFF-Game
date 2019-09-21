import React, {memo, useState, createContext} from 'react';
import Board from '../Board/Board';
import Styles from './Game.style';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import createBoard from '../../Helpers/createBoard';
import toggleCells from '../../Helpers/toggleCells';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export const GameContext = createContext();

const Game = props => {
    let {classes} = props;
    let {rows, cols} = props.match.params;
    if(rows < 3) rows = 3;
    else if(rows > 10 || isNaN(rows)) rows = 10;
    if(cols < 3) cols = 3;
    else if(cols > 10 || isNaN(cols)) cols = 10;

    const [board, setBoard] = useState(() => createBoard(rows, cols));

    const toggle = (i, j) => setBoard(toggleCells(board,i,j));

    let Game = (
        <div className={classes.Game}>
            <Board />
            <div className={classes.PlayAgain}>
                <Link to="/">
                    <Button fullWidth variant="contained" color="primary" className={classes.button}>Start A New Game ?</Button>
                </Link>
            </div>
        </div>
    );

    if(board.every(r => r.every(c => c === false))) Game = (
        <div className={classes.Game}>
            <h3 className={classes.youWon}>You Won !!</h3>
            <div className={classes.PlayAgain}>
                <Link to="/">
                    <Button fullWidth variant="contained" color="primary" className={classes.button}>Play Again ?</Button>
                </Link>
            </div>
        </div>
    );

    return <GameContext.Provider value={{board, toggle}}>
                {Game}
            </GameContext.Provider>;
};

Game.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired
}

Game.defaultProps = {
    rows: 5,
    cols: 5
}

export default memo(withStyles(Styles)(Game));