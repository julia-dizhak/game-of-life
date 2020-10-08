import React from 'react';
import { connect } from 'react-redux';
import { Grid } from './components/Grid'
import './game.css';

function Game(props) {
  return (
    <div className="container">
      <h1 className="title">Conway's Game of Life</h1>
      <Grid />
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
