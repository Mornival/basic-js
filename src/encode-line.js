const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res = '';
  let sym = str[0];
  let counter = 1;
  for(let i = 1; i < str.length; i++){
      if(sym == str[i]){
          counter++;
      } else {
          if(!(counter == 1)){
              res += counter;
          } 
          res += sym;
          counter = 1;
          sym = str[i];
      }
      if(i + 1 == str.length){
          if(!(counter == 1)){
              res += counter;
          } 
          res += sym;    
      }
  }
  return res
}

module.exports = {
  encodeLine
};
