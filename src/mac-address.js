const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  if(n.length != 17){
      return false;
  }
  for(let i = 0; i < 17; i++){
      if(n[i].charCodeAt() >= 65 && n[i].charCodeAt() <= 70 ||n[i].charCodeAt() >= 48 && n[i].charCodeAt() <= 57 ){

      } else {
          return false;
      }
      if(n[i + 1].charCodeAt() >= 65 && n[i + 1].charCodeAt() <= 70 ||n[i + 1].charCodeAt() >= 48 && n[i + 1].charCodeAt() <= 57 ){

      } else {
          return false;
      }
      i+=2;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
