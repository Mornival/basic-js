const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1,s2) {
  let s1Mas = s1.split('').sort();
  let s2Mas = s2.split('').sort();
  let res = 0;
  for(let i = 0; i < s1Mas.length; i++){
      for(let j = 0; j < s2Mas.length; j++){
          if(s1Mas[i] == s2Mas[j] && s1Mas[i] != ''){
              s1Mas[i] = '';
              s2Mas[j] = '';
              res++;
          }
      }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
