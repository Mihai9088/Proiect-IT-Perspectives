import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {
  if (props.number % 2 === 0) {
    return (
      <div className={`${classes.tiles} ${classes['black-tiles']}`}>
       {props.image !== undefined && <div className={classes.Pieces}  style={{backgroundImage:`url(${props.image})`}}></div>}
      </div>
    );
  } else {
    return (
      <div className={`${classes.tiles} ${classes['white-tiles']}`}>
     { props.image !== undefined && <div className={classes.Pieces} style={{backgroundImage:`url(${props.image})`}}></div>}
      </div>
    );
  }
};

export default Tile;
