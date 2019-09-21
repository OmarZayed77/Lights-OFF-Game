import React from 'react';
import Styles from './Error.styles';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Error = props => {
    const {classes} = props;
   return(
    <div className={classes.Error}>
        <h3 className={classes.unvalid}>You Entered Unvalid URL !</h3>
        <div className={classes.return}>
            <Link to="/">
                <Button fullWidth variant="contained" color="primary" className={classes.button}>Return to game</Button>
            </Link>
        </div>
    </div>
    );
}

export default withStyles(Styles)(Error);