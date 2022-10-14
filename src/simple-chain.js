const { resetHistory } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  str : '',
  getLength() {
    return this.str.length;
  },
  addLink(value) {
      if (this.str == '') {
          this.str = `( ${value} )`;
      } else {
          this.str = this.str + `~~( ${value} )`;
      }
      return this;
  },
  removeLink(position) {
      if(typeof(position) != 'number'){
        this.str = '';
          throw new Error(`You can't remove incorrect link!`);
      }
      if(position != Math.floor(position)){
        this.str = '';
          throw new Error(`You can't remove incorrect link!`);
      }
      let newStr = '';
      let k = 0;
      let j = 1
      for(let i = 0; i < this.str.length; i++){
          if(this.str[i] == '~' && this.str[i + 1] == '~'){
              if(position != j){
                  newStr += this.str.substring(k,i);
                  newStr += '~~';
              }
              k = i + 2;
              j++;
          }
          if(i + 1 == this.str.length){
              newStr += this.str.substring(k,i + 1);
          }
      }
      if(this.str == newStr){
        this.str = '';
          throw new Error(`You can't remove incorrect link!`);
      }
      this.str = newStr;
      return this;
  },
  reverseChain() {
      if(this.str == ''){
          return this;
      }
      let newStr = '';
      let k = this.str.length;
      for(let i = this.str.length - 1; i >= 0; i--){
          if(this.str[i] == '~' && this.str[i - 1] == '~'){
              newStr += this.str.substring(i + 1,k);
              newStr += '~~';
              k = i - 1;
          }
          if(i - 1 < 0){
              newStr += this.str.substring(i,k);
          }
      }
      this.str = newStr;
      return this;
  },
  finishChain() {
    let k = this.str;
    this.str = '';
    return k;
  }
};

module.exports = {
  chainMaker
};
