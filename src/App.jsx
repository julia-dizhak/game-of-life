import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <>
      <h1>Conway's Game of Life</h1>
      <div>{props.hello}</div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    hello: state.hello,
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
