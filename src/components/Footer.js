import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="#000">
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
