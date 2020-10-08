import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './Game';
import reducer from './reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
