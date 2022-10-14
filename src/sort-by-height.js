const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrOfIndex = [];
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          arrOfIndex.push(i);
          newArr.push(arr[i]);
      }
  }
  newArr = newArr.sort(function(a,b){
      return a - b;
  })
  console.log(arrOfIndex);
  console.log(newArr);
  for(let i = 0; i < newArr.length;i++){
      arr[arrOfIndex[i]] = newArr[i];
  }
  console.log(arr);
  return arr
}

module.exports = {
  sortByHeight
};
