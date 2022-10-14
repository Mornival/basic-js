const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof(date) == 'undefined' || typeof(date) == 'null'){
    return 'Unable to determine the time of year!';
  }
  if(typeof(date) != 'object'){
      throw new Error('Invalid date!');
  }
  if(!(date instanceof Date)){
      throw new Error('Invalid date!');
  }
  try{
      date.getUTCDay();
  } catch{
      throw new Error('Invalid date!');
  }
  console.log(date);
  console.log(typeof(date));
  let Month = date.getMonth();
  if(Month < 2 || Month == 11){
      console.log('winter');
      return 'winter'
  }
  if(Month >= 2 && Month <= 4){
      console.log('spring');
      return 'spring'
  }
  if(Month >= 5 && Month <= 7){
      console.log('summer');
      return 'summer'
  }
  if(Month >= 8 && Month <= 10){
      console.log('autumn');
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
