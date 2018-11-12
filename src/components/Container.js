import React from 'react';
import { GridList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 550,
    height: 550,
  },
});

function Container(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {props.children}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(Container);