import { make2DArray } from '../utils/make2DArray';

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
  const initGridState = make2DArray(ROWS, COLS);

  switch (action.type) {
    case 'BOOTSTRAP_APP':
      return {
        ...state,
        gridState: initGridState
      }
  
    default:
      break;
  }


  return state;
}
