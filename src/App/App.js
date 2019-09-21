import React from 'react';
import Game from '../Components/Game/Game';
import Home from '../Components/Home/Home';
import Error from '../Components/Error/Error';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Styles from './App.styles';
import {withStyles} from '@material-ui/core';


const App = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <h1 className={classes.GameHeader}>
                <div className="neon">Lights</div>
                <div className="flux">Off</div>
            </h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/game/:rows/:cols" exact component={Game} />
                    <Route path="/" exact component={Home} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
            <div className={classes.copyRights}>Made By &copy; Omar Zayed</div>
        </div>
    );
}

export default withStyles(Styles)(App);