import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { BOOTSTRAP_APP, INIT_NEW_GENERATION } from './store/reducer';
import { Grid } from './components/Grid'
import './game.css';

function Game(props) {
  // todo optimize useSelector
  const gridState = useSelector(state => state.gridState);
  const isRunning = useSelector(state => state.isRunning);
  const generation = useSelector(state => state.generation);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({type: BOOTSTRAP_APP})
  }, []);

  return (
    <div className="container">
      <h1 className="title">Conway's Game of Life</h1>

      {gridState.length > 0 ? 
        <Grid 
          gridState={gridState}
        />:
        null  
      }

      <div className="controls">
        <p>{`Generation: ${generation}`}</p>
        <button type="button">stop</button>
        <button type="button">start</button>
        <button type="button">New generation in one step</button>
        
        <button 
          type="button" 
          disabled={isRunning} 
          onClick={() => dispatch({type: INIT_NEW_GENERATION})}>
            init new generation
        </button>
      </div>
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
