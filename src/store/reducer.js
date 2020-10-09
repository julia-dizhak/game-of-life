import { make2DArray } from '../utils/make2DArray';
import { defineNextGeneration } from '../utils/defineNextGeneration';
import allActionsTypes from './action-types';

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
    case allActionsTypes.BOOTSTRAP_APP:
      return {
        ...state,
        gridState: initGridState
      }
    
    case allActionsTypes.INIT_NEW_GENERATION:
      return {
        ...state, 
        generation: 0,
        gridState: initGridState
      }; 
      
    case allActionsTypes.HANDLE_NEXT_GENERATION:
      const { generation, gridState } = state;
      const prevState = gridState;
      const nextGenerationState = defineNextGeneration(prevState);

      return {
        ...state, 
        generation: generation + 1,
        gridState: nextGenerationState
      };   

    case allActionsTypes.HANDLE_RUN:
      return {
        ...state, 
        isRunning: true
      };  
        
    case allActionsTypes.HANDLE_STOP:
      return {
        ...state, 
        isRunning: false
      };   
  
    default:
      break;
  }

  return state;
}
