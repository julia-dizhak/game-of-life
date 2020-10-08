/**
 * Returns total amount of neighbors which are alive for neighbor with given 
 * position (row and col)
 * 
 * @param {[[]]} grid 
 * @param {number} row 
 * @param {number} col 
 * @return {number} 
 */
export const countTotalAmountAliveNeighbors = (grid, row, col) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  
  return neighbors.reduce((amount, neighbor) => {
    const x = row + neighbor[0];
    const y = col + neighbor[1];

    const isOnEdge = (x >= 0 && x < rows && y >= 0 && y < cols);
    if (isOnEdge && grid[x][y]) {
      return amount + 1;
    } else {
      return amount;
    }
  }, 0);
}