const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  console.log(arr);
  if(!(Array.isArray(arr))){
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [];
  let disNext = false;
  let disPrev = false;
  let doubleNext = false;
  let doublePrev = false;
  for(let i = 0; i < arr.length ;i++){
      if(i >= 1){
          if(arr[i - 1] == '--discard-next'){
              disNext = true;
          }
          if(arr[i - 1] == '--double-next'){
              doubleNext = true;
          }
      }
      if(i - 1 < arr.length){
          if(arr[i + 1] =='--discard-prev'){
              disPrev = true;
          }
          if(arr[i + 1] =='--double-prev'){
              doublePrev = true;
          }
      }
      if(arr[i] != '--discard-prev' && arr[i] != '--discard-next'  && arr[i] != '--double-next'  && arr[i] != '--double-prev'){
          if(!disNext){
              newArr.push(arr[i]);
              if(doublePrev || doubleNext && !disPrev){
                  newArr.push(arr[i])
                  console.log(doublePrev);
                  console.log(doubleNext);
                  if(doublePrev && doubleNext && !disPrev){
                      newArr.push(arr[i]);
                  }
              }
          }
      }
      disNext = false;
      disPrev = false;
      doubleNext = false;
      doublePrev = false;
  }
  console.log(newArr);
  return newArr;
}


module.exports = {
  transform
};
