/**
 * Returns an array of arrays, each containing booleans values true or false
 * 
 * @param {number} rows 
 * @param {number} cols 
 * @param {function} fill 
 * @return {[[]]} arr
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

// tests
const testArr = make2DArray(2,2);
console.log('testArr', testArr);

export {
  make2DArray
}