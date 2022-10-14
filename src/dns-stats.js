const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};
  let mas = [];
  if(!domains){
      return false
  }
  for(let i = 0; i < domains.length; i++){
      for(let j = domains[i].length - 1;j >= 0; j--){
          if(domains[i][j] == '.' ){
              mas.push(domains[i].substr(j,domains[i].length));
          }
          if(j - 1 < 0){
              mas.push(`.${domains[i].substr(j,domains[i].length)}`);
          }
      }
  }
  mas = mas.sort(function(a,b){
      return a.length - b.length;
  });
  for(let i = 0; i < mas.length; i++){
      let res = '';
      let k = mas[i].length;
      for(let j = mas[i].length;j >= 0; j--){
          if(mas[i][j] == '.' ){
              res = res + mas[i].substring(j,k);
              k = j;
          }
      }
      mas[i] = res;
  }
  for(let i = 0; i < mas.length; i++){
      if(obj[mas[i]]){
          obj[mas[i]]++;
      } else {
          obj[mas[i]] = 1;
      }
  }
  return obj
}

module.exports = {
  getDNSStats
};
