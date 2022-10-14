const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(domains) {
  if(!domains){
    return false;
  }
  let masDomains = [];
  for(let i = 0; i < domains.length;i++){
      if(domains[i]){
          if(typeof(domains[i]) == 'string'){
              if(domains[i][0].toUpperCase().charCodeAt() >= 65 && domains[i][0].toUpperCase().charCodeAt() <= 90){
                  masDomains.push(domains[i][0].toUpperCase());
              }
              if(domains[i][0] == ' '){
                domains[i] = domains[i].substr(1,domains.length);
                i--;
              }
          }
      }
  }
  return masDomains.sort().join('');
}

module.exports = {
  createDreamTeam
};
