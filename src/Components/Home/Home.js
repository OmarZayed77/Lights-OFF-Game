import React, {useState} from 'react';
import {withStyles} from '@material-ui/core';
import Styles from './Home.styles';
import {Button} from '@material-ui/core';
import Slider from '../../Material-UI/PrettoSlider';
import {Link} from 'react-router-dom';

const Home = props => {
    const {classes} = props;
    const [rows, setRows] = useState(5);
    const [cols, setCols] = useState(5);
    return (
        <div className={classes.Home}>
            <div className={classes.sliderContainer}>
                <div className={classes.label}>Choose Number of Rows</div>
                <div className={classes.slider}>
                    <Slider value={rows}  setValue={setRows} />
                </div>
            </div>
            <div className={classes.sliderContainer}>
                <div className={classes.label}>Choose Number of Columns</div>
                <div className={classes.slider}>
                    <Slider value={cols}  setValue={setCols} />
                </div>
            </div>
            <div className={classes.start}>
                <Link to={`/game/${rows}/${cols}`}>
                    <Button fullWidth variant="contained" color="primary" className={classes.button}>Start Game</Button>
                </Link>
            </div>
        </div>
    );
};

export default withStyles(Styles)(Home);