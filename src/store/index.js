import { createStore, compose } from 'redux';
import reducer from './reducer'

const windowIfDefined = typeof window === 'undefined' ? null : window;
const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducer,
  composeEnhancers()
);