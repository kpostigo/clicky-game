import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    flex: 8,
    marginLeft: 20,
    fontWeight: 700,
  },
  score: {
    flex: 1,
    fontWeight: 600,
  },
  topScore: {
    flex: 1,
    fontWeight: 600,
  },
};

function NavBar(props) {

  const { classes } = props;

  return (
    <AppBar position="static" color="primary" className="top-bar">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.score}>
          Score: {props.score}
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.topScore}>
          Top Score: {props.topScore}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);