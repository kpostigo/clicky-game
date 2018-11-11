import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    margin: 50,
    textAlign: 'center',
  },
  head: {
    marginBottom: 30,
    fontWeight: 500,
  },
  body: {
    fontWeight: 500,
  },
};

function Header(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.head}>
        Wacky Races Clicky Game
      </Typography>
      <Typography variant="h4" color="inherit" className={classes.body}>
        Click on an image to earn points, but don't click on any more than once!
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Header);