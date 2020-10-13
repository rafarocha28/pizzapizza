import React from 'react';
import logo from '../assets/pizza.png';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: '40px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => history.push('/welcome')}
        >
          <img src={logo} className={classes.logo} alt="PizzaPizza" />
        </IconButton>
        <Typography variant="h6" color="inherit">
          PizzaPizza
        </Typography>

        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
