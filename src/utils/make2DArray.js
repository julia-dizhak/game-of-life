/**
 * Returns an array of arrays, each containing booleans values true or false
 * 
 * @param {number} rows 
 * @param {number} cols 
 * @param {function} fill 
 * @return {[[]]} 
 */
function make2DArray(rows, cols, fill = () => Math.random() < 0.3) {
  let arr = [];

  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = fill();
    }
    
  }

  return arr;
}

export {
  make2DArray
}