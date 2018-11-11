import React from 'react';
import { GridListTile } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  item: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 170,
    width: 170,
    border: 5,
    borderRadius: 3,
    cursor: 'pointer',
  },
};

function ClickItem(props) {
  const { classes } = props;
  return (
    <GridListTile
      role="img"
      key={props.id}
      cols={props.cols || 1}
      onClick={() => props.handleClick(props.id)}
      className={classes.item}>
      <img
        src={props.image}
        alt="click item"
      />
    </GridListTile>
  );
}

export default withStyles(styles)(ClickItem);