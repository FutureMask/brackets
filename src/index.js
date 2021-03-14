module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let open = {
      
      '{': '}',
      '[': ']',
      '(': ')'
  };

  let closed = {
      
      '}': true,
      ']': true,
      ')': true
  }

  for (let i = 0; i < str.length; i++) {

      let char = str[i];

      if (open[char]) {
          stack.push(char);
      } else if (closed[char]) {
          if (open[stack.pop()] !== char) return false;
      }
  }
  return stack.length === 0;
  
}
 
  /*
  let brackets = "][}{})("
  let stack = []

  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)
  }
    return true ? true : false
*/
  // if (regexp = new RegExp("()", "g"))
  //  return regexp.test(str, bracketsConfig)
   // else return false
    
 //   else (regexp = new RegExp("() []", "g"))
    //  return regexp.test(str, bracketsConfig)
    
   