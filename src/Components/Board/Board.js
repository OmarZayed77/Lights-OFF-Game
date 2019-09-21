import React, {memo, useContext} from 'react';
import Cell from '../Cell/Cell';
import Styles from './Board.style';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {GameContext} from '../Game/Game';

const Board = props => {
    const {classes} = props;
    const {board} = useContext(GameContext);
    return (
        <table className={classes.Board}>
            <tbody>
                {board.map((r,i) => <tr key={i}>{r.map((c,j) => <Cell key={`${i}-${j}`} id={`${i}-${j}`} isLighted={c}/>)}</tr>)}
            </tbody>
        </table>
    );
};

Board.defaultProps = {
    board: [
        [true,false,true,false,false],
        [true,false,true,false,false],
        [true,false,true,false,false],
        [true,false,true,false,false],
        [true,false,true,false,false]
    ]
}

Board.propTypes = {
    board: PropTypes.array.isRequired
}

export default memo(withStyles(Styles)(Board));