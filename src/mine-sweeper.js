const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let newMatrix = [];
  for(let i = 0; i < matrix.length; i++){
      newMatrix.push([]);
      for(let j = 0; j < matrix[i].length;j++){
          newMatrix[i].push(matrix[i][j]);
      }
  }
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          newMatrix[i][j] = 0;
          let i1 = i - 1
          if(i1 < 0){
              i1 = 0;
          }
          for(;i1 < i + 2; i1++){
              let j1 = j - 1
              if(j1 < 0){
                  j1 = 0;
              }
              for(; j1 < j + 2; j1++){
                  if(matrix[i1][j1] == true && (i1 != i || j1 != j)){
                      newMatrix[i][j]++;
                  }
                  if(j1 + 1 >= matrix[i].length){
                      j1 = matrix[i].length;
                  }
              }
              if(i1 + 1 >= matrix.length){
                  i1 = matrix.length;
              }
          }
      }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
