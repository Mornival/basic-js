const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(bool){
        this.bool = bool;
    }
    encrypt(str,key) {
        if(typeof(str) == 'undefined'|| typeof(str) == 'null'){
            throw new Error ('Incorrect arguments!')
        }
        if(typeof(key) == 'undefined'|| typeof(str) == 'null'){
            throw new Error ('Incorrect arguments!')
        }
        if(this.bool == false){
            let newStr = [];
            for(let i = 0; i < str.length; i++){
                newStr += str[str.length - 1 - i];
            }
            str = newStr;
        }
        let result = '';
        let k = 0;
        for(let i = 0; i < str.length; i++){
            if((str[i].toUpperCase()).charCodeAt() >= 65 && (str[i].toUpperCase()).charCodeAt() <= 90){
                let bottle = ((key[k].toUpperCase()).charCodeAt() - 64 + (str[i].toUpperCase()).charCodeAt() - 65);
                if(bottle > 26){
                    bottle = bottle % 26;
                }
                bottle = String.fromCharCode(bottle + 64);
                result += bottle;
                k++;
            } else {
                result += str[i];
            }
            if(k >= key.length){
                k = 0;
            }
        }
        return result;
    }
    decrypt(str,key) {
        if(typeof(str) == 'undefined'|| typeof(str) == 'null'){
            throw new Error ('Incorrect arguments!')
        }
        if(typeof(key) == 'undefined'|| typeof(str) == 'null'){
            throw new Error ('Incorrect arguments!')
        }
        if(this.bool == false){
            let newStr = [];
            for(let i = 0; i < str.length; i++){
                newStr += str[str.length - 1 - i];
            }
            str = newStr;
        }
        let result = '';
        let k = 0;
        for(let i = 0; i < str.length; i++){
            if((str[i].toUpperCase()).charCodeAt() >= 65 && (str[i].toUpperCase()).charCodeAt() <= 90){
                let bottle = str[i].toUpperCase().charCodeAt() - key[k].toUpperCase().charCodeAt();
                if(bottle < 0){
                    bottle += 26;
                }
                bottle += 65;
                bottle = String.fromCharCode(bottle);
                result += bottle;
                k++;
            } else {
                result += str[i];
            }
            if(k >= key.length){
                k = 0;
            }
        }
        return result;
    }
  }
module.exports = {
  VigenereCipheringMachine
};
