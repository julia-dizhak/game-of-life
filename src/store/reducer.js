import { make2DArray } from '../utils/make2DArray';
import { defineNextGeneration } from '../utils/defineNextGeneration';

import {
  ROWS, COLS,
  SPEED
} from '../config';

// action types
export const BOOTSTRAP_APP = 'BOOTSTRAP_APP';
export const INIT_NEW_GENERATION = 'INIT_NEW_GENERATION';
export const HANDLE_NEXT_GENERATION = 'HANDLE_NEXT_GENERATION';

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
    case BOOTSTRAP_APP:
      return {
        ...state,
        gridState: initGridState
      }
    
    case INIT_NEW_GENERATION:
      return {
        ...state, 
        generation: 0,
        gridState: initGridState
      }; 
      
    case HANDLE_NEXT_GENERATION:
      const { generation, gridState } = state;
      const prevState = gridState;
      const nextGenerationState = defineNextGeneration(prevState);
      return {
        ...state, 
        generation: generation + 1,
        gridState: nextGenerationState
      };   
  
    default:
      break;
  }


  return state;
}
