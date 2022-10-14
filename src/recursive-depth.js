const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let i = 0; i < arr.length; i++){
        let depthElement = 1;
        if(typeof(arr[i]) == 'object'){
            if(arr[i].length > 0){
                depthElement += this.calculateDepth(arr[i]);
            }
            else {
                depthElement++;
            }
        }
        if(depth < depthElement){
            depth = depthElement;
        }
    }
    return depth;
}
}

module.exports = {
  DepthCalculator
};
