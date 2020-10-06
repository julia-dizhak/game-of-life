import { combineReducers } from 'redux';

function hello(state = 'Conways Game of Life') {
  return state;
}

export default combineReducers({
  hello,
});
