//var input = 'ASDASSSD!';
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

function isPasswordValid(input){ 
  if (hasUpperCase(input) ||  hasSpecialCharacter(input)){   
    return false;
  }
  return true;
}

function hasUpperCase(input){
  for(var i = 0; i < input.length; i++){
    if (input[i] === input[i].toUpperCase()){
        
      return true;
    }
  }
}

 

function hasSpecialCharacter(input){
  for(var k = 0; k < input.length; k++){
    for(var i = 0; i < specialCharacters.length; i++){
      if(input[k]===specialCharacters[i]){
         
        return true;
      }
    }
    
  }
  
}

 

//hasSpecialCharacter(input);
//isPasswordValid(input);
//hasUpperCase(input);