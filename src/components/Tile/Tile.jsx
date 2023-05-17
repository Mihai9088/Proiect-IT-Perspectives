import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {
  if (props.number % 2 === 0) {
    return (
      <div className={`${classes.tiles} ${classes['black-tiles']}`}>
    <img className={classes.chessImage} src={props.image}  />
      </div>
    );
  } else {
    return (
      <div className={`${classes.tiles} ${classes['white-tiles']}`}>
      <img src={props.image}  />
      </div>
    );
  }
};

export default Tile;
