// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function notUnique(alpha) {
    // abbdde - true
    // abcdef - false
    
    for(i = 0; i < alpha.length  ; i++ ) {
      for(j = i+1; j < alpha.length; j++) {
//         console.log([i,j]) 
        if (alpha[i] === alpha[j]) {
          return true;
        }
      }
    }
    return false;
//     alpha.map(letter => alpha.indexOf(letter) > -1)
  }
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26 || notUnique(alphabet)) {
      return false;
    }
    if(encode){
      

    let output = []

    const encoder = {97: alphabet[0], 98: alphabet[1], 99: alphabet[2], 100: alphabet[3], 101: alphabet[4], 102: alphabet[5], 103: alphabet[6], 104: alphabet[7], 105: alphabet[8], 106: alphabet[9], 107: alphabet[10], 108: alphabet[11], 109: alphabet[12], 110: alphabet[13], 111: alphabet[14], 113: alphabet[15], 114: alphabet[16], 115: alphabet[18], 116: alphabet[17], 117: alphabet[19], 118: alphabet[20], 119: alphabet[21], 120: alphabet[22], 122: alphabet[23], 121: alphabet[24], 123: alphabet[25]
    } 
    console.log(input)
    console.log(alphabet)
      
    for(i = 0; i < input.length; i++) {
      if(input[i] === " "){
      output.push(" ")
      }
      
      output.push(encoder[input.charCodeAt(i)])
    }
    console.log(output)
    return output.join("").trim()
  }
    else {
      let output = []
    console.log(input)
    console.log(input.charCodeAt(0))
    console.log(alphabet )
      const decoder = { 
         0 : "a",
         1 : "b",
         2 : "c",
         3 : "d",
         4 : "e",
         5 : "f",
         6 : "g",
         7 : "h",
         8 : "i",
         9 : "j",
         10 : "k",
         11 : "j",
         12 : "m",
         13 : "l",
         14 : "n",
         15 : "o",
         16 : "p",
         17 : "q",
         18 : "s",
         19 : "r",
         20 : "t",
         21 : "u",
         22 : "v",
         23 : "w",
         24 : "y",
         25 : "x",
         26 : "z"     
    }
      //get each letter
      for(let i = 0; i < input.length; i++) {
              if(input[i] === " "){
      output.push(" ")
      }
        let srchLetter = input[i]
//         get each replaced letter
        for(let j =0; j < alphabet.length; j++){
          
//           if the letter matches the replaced letter then take the letter location "j" into the decoder and push that to the output
          srchLetter === alphabet[j] ? output.push(decoder[j]) : input[i] 
        }
        console.log(output)
      }
      return output.join("").trim()
//       take each letter of the input and see where it mathces at in the alphabet string whereever it matches at that is the location of the decoded letter
}
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
//             "a" : alphabet[0] ,
//             "b" : alphabet[1] , 
//             "c" : alphabet[2]
//       } 
    
//     for(i = 0; i < input.length; i++) {
//       if(input[i] === " "){
//       output.push(" ")
//       }
//       for(j = 0; j < alphabet.length; j++){
//         if(input[i] === alphabet[j]){
// //           output.push()
//         }
//       }
//       output.push(decoder[input.charCodeAt(i)])
//     }
//     console.log(output)
//     return output.join("").trim()
