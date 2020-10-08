import React from 'react';
import { connect, useSelector } from 'react-redux';

import { Grid } from './components/Grid'
import './game.css';

function Game(props) {
  // todo optimize useSelector
  const gridState = useSelector(state => state.gridState);
  const rows = useSelector(state => state.rows);
  const cols = useSelector(state => state.cols);

  return (
    <div className="container">
      <h1 className="title">Conway's Game of Life</h1>

      {gridState.length > 0 ? 
        <Grid 
          gridState={gridState}
          rows={rows}
          cols={cols}
        />:
        null  
      }
      
      {/* display generation
      controls */}
      <button type="button">stop</button>
      <button type="button">start</button>
      <button type="button">New generation in one step</button>
      <button type="button">initialize new generation</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    hello: state.hello,
  };
}

const ConnectedApp = connect(mapStateToProps)(Game);

export default ConnectedApp;
