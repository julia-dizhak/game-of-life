import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';

import allActionsTypes from './store/action-types';
import { Grid } from './components/Grid'
import './game.css';

export default function Game() {
  const { gridState, generation, isRunning, speed } = useSelector(state => ({
    gridState: state.gridState,
    generation: state.generation,
    isRunning: state.isRunning,
    speed: state.speed
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: allActionsTypes.BOOTSTRAP_APP })
  }, [dispatch]);

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => {
        dispatch({type: allActionsTypes.HANDLE_NEXT_GENERATION})
      }, speed);
    }

    if (!isRunning) {
      clearInterval(id);
    }
    return () => clearInterval(id);

  }, [dispatch, isRunning, speed]);

  const renderUpperControls = (isRunning) => {
    return isRunning ? 
      <button 
        type="button" 
        onClick={() => dispatch({type: allActionsTypes.HANDLE_STOP})}>Stop</button> 
      :
      <button 
        type="button" 
        onClick={() => dispatch({type: allActionsTypes.HANDLE_RUN})}>Start</button>;
  }

  return (
    <div className="container">
      <h1 className="title">Conway's Game of Life</h1>

      {gridState.length > 0 ? 
        <Grid 
          gridState={gridState}
        />:
        null  
      }

      <div className="generation">
        <p>{`Generation: ${generation}`}</p>
      </div>  

      <div className="controls">
        <div className="upper-controls">
          {renderUpperControls(isRunning)}
        </div>

        <div className="bottom-controls">
          <button 
            type="button" 
            disabled={isRunning} 
            onClick={() => dispatch({type: allActionsTypes.HANDLE_NEXT_GENERATION})}>
              Next generation in one step
          </button>
          
          <button 
            type="button" 
            disabled={isRunning} 
            onClick={() => dispatch({type: allActionsTypes.INIT_NEW_GENERATION})}>
              Init new generation
          </button>
        </div>  
      </div>
    </div>
  );
}
