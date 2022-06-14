// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
        if(!shift || shift === 0 || shift > 25 || shift < -25) {
      return false
    }
    let output = []
    
//     ENCODER <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
if(encode===true){
    for(let i = 0; i <= input.length; i++) {
      let newCharCode = input.charCodeAt(i)+shift
      
      if((input.charCodeAt(i)>= 65 && input.charCodeAt(i)< 91) ||(input.charCodeAt(i) >= 97 && input.charCodeAt(i) < 123)) {
        
//         console.log(newCharCode)
        if(newCharCode >=123) {
          newCharCode = newCharCode - 26
        }
        else if(newCharCode <97 && newCharCode > 91 || newCharCode < 65){
          newCharCode = newCharCode + 26
        }
        console.log(newCharCode)
//         let ne = input.charCodeAt(i)
//         let mt = 91
//         console.log(String.fromCharCode(((mt*2) + shift)%ne))
        output.push(String.fromCharCode(newCharCode))
      }
      else 
        {
          output.push(input[i])
        }
    }
}
    
//     DECODER <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>
    if(encode === false) {
          for(let i = 0; i <= input.length; i++) {
            let newCharCode = (input.charCodeAt(i)-shift)
            if((input.charCodeAt(i)>= 65 && input.charCodeAt(i)< 91) ||(input.charCodeAt(i) >= 97 && input.charCodeAt(i) < 123)) {
        
        
                if(newCharCode >=123) {
          newCharCode = newCharCode - 26
        }
        else if(newCharCode <97 && newCharCode > 91 || newCharCode < 65){
          newCharCode = newCharCode + 26
        }
        console.log(newCharCode)
        
  //         let ne = input.charCodeAt(i)
  //         let mt = 91
  //         console.log(String.fromCharCode(((mt*2) + shift)%ne))
          output.push(String.fromCharCode(newCharCode))
        } else
          {
            output.push(input[i])
          }
      }

    }

    
    
    
     return output.join("").toLowerCase()

  
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
