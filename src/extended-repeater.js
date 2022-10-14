const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str,options){
  let result = '';
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes =1;
  let additionSeparator = '|';
  if(options.repeatTimes){
    repeatTimes = options.repeatTimes;
  }
  if(options.separator){
    separator = options.separator;
  }
  if(options.addition){
    addition = options.addition;
  }
  if(options.addition === false){
      addition = options.addition.toString();
  } else if (options.addition === null){
    addition = 'null';
  }
  if(options.additionRepeatTimes){
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if(options.additionSeparator){
    additionSeparator = options.additionSeparator;
  }
  for(i = 0; i < repeatTimes;i++){
      let str1 = str;
      for(let j = 0; j < additionRepeatTimes; j++){
          str1+= addition;
          if(!(j + 1 == additionRepeatTimes)){
              str1 += additionSeparator;
          }
      }
      if(!(i + 1 == repeatTimes)){
          str1 += separator
      }
      result += str1;
  }
  console.log(result);
  return result;
}

module.exports = {
  repeater
};
