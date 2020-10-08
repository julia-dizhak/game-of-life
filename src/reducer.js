import { combineReducers } from 'redux';

function hello(state = 'hello ') {
  return state;
}

export default combineReducers({
  hello,
});
