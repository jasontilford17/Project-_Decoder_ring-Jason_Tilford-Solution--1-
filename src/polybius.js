// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
//     console.log(input)
    // create a polybius square multidimensional array and an output array
    let output = []
    const multiArray = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]
    multiArray[0] = ["a","f","l","q","v"]
    multiArray[1] = ["b","g","m","r","w"]
    multiArray[2] = ["c","h","n","s","x"]
    multiArray[3] = ["d","i/j","o","t","y"]
    multiArray[4] = ["e","k","p","u","z"]
    
//     ENCODER <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
  if(encode){

    //get each letter of the passed in string

      for(let i = 0; i <= input.length; i++) {
        
        let letter = input[i]
        letter === " "?  output.push(" ") : letter
        //loop through the arrays in the multi-array to find the letter
                if(input[i] === 'i' || input[i] === 'j' )
                  {
                    output.push(42)
                  }
        for(let c = 0; c < multiArray.length; c++){


          for(let r = 0; r<5; r++){
            if(letter === multiArray[c][r])
              {

                console.log(output)
                output.push(c+1)
                output.push(r+1)

              }

          }
        }
//         output.join().replace(",","")
    }
    return output.join("")
//     return output.join().replace(",","")
  }
      else{ 

        const words = input.split(" ");
const decoder = { '11': 'a', '12': 'f', '13': 'l', '14': 'q', '15': 'v', '21': 'b', '22': 'g', '23': 'm', '24': 'r', '25': 'w', '31': 'c', '32': 'h', '33': 'n', '34': 's', '35': 'x', '41': 'd', '42': 'i/j', '43': 'o', '44': 't', '45': 'y', '51': 'e', '52': 'k', '53': 'p', '54': 'u', '55': 'z' };
console.log(input);
// console.log(words.map(w => w.length));

              if (!words.every(input => input % 2 === 1)) {
    return false;
  } 

  const output = [];

 words.map( input => {
   output.push(" ")
  for (let i = 0; i < input.length; i += 2) {
    
    input[i] === " " ? output.push(" ") : input[i]
    // console.log(`${str[i]}${str[i+1]}`);
    // console.log(decoder[`${str[i]}${str[i+1]}`]);
    output.push((decoder[`${input[i]}${input[i+1]}`]));
  }})

        console.log(output)
    return output.join("").trim()
//     return output.join().replace(",","")
  }
    
 }
  return {
    polybius,
  };
 
})();

module.exports = { polybius: polybiusModule.polybius };
