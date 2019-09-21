import React, {memo, useContext} from 'react';
import PropTypes from 'prop-types';
import Styles from './Cell.style';
import {withStyles} from '@material-ui/core';
import {GameContext} from '../Game/Game';

const Cell = props => {
    const {id, isLighted, classes} = props;
    const {toggle} = useContext(GameContext);
    const toggleCells = () => {
        const [i,j] = id.split('-');
        toggle(parseInt(i), parseInt(j));
    } 

    return <td onClick={toggleCells} className={isLighted ? `${classes.Cell} ${classes.Light}` : classes.Cell}></td>
};

Cell.propTypes = {
    isLighted: PropTypes.bool.isRequired
}

export default memo(withStyles(Styles)(Cell));