const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  let res = 0;
  let str = num.toString().split('');
  let maxString = [];
  for(let i = 0; i < str.length; i++){
    let newStr = str.slice(0);
    newStr[i] = '';
    maxString.push(newStr.join(''));
  }
  maxString.forEach((v,i,a) => {
      if(res < +maxString[i]){
          res = +maxString[i];
      }
  });
  return res
}

module.exports = {
  deleteDigit
};
