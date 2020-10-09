import { countTotalAmountAliveNeighbors } from './countTotalAmountAliveNeighbors';

/**
 * Returns nextState based on initState based on specific rules below
 * 
 * The rules are:
 * - the cell = false becomes true (alive) when it has 3 life neighbours, otherwise 
 * it stays false;
 * 
 * - the cell = true dies when it has less than 2 lives (underpopulation) and 
 * greater than 3 lives (overpopulation), otherwise it stays true;
 * 
 * So reproduction happens with exactly 3 neighbors, death happens with < 2, 
 * > 3 neighbours;
 * 
 * @param {[[]]} initState 
 * @return {[[]]} 
 */

export const defineNextGeneration = function(initState) {
  const nextState = JSON.parse(JSON.stringify(initState));
  const rows = nextState.length;
  const cols = nextState[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const totalAliveNeighbors = countTotalAmountAliveNeighbors(initState, i, j);
      const alive = initState[i][j] ? true : false;

      if (alive) {
        if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3) {
          nextState[i][j] = false;
        }
      } else {
        if (totalAliveNeighbors === 3) nextState[i][j] = true;
      }
    }
  }

  return nextState;
}
