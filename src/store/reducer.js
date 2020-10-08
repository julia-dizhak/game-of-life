import {
  ROWS, COLS,
  SPEED
} from '../config';

const initState = {
  gridState: [],
  rows: ROWS,
  cols: COLS,
  generation: 0,
  isRunning: false,
  speed: SPEED,
}

export default function reducer(state = initState, action) {
  
  return state;
}
