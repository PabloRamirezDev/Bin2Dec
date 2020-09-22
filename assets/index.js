//SCRIPT FOR BINARY TO DECIMAL NUMBER CONVERTER BY PABLO RAMÍREZ

//Getting reference for the input and output fields
const binary = document.getElementById('binary');
const decimal = document.getElementById('decimal');

binary.addEventListener('input', handleInput); //When the user writes into the input field, the handleInput function is called

function handleInput(e) {
  if(binary.value === "") { //Checks that input is not empty
    decimal.value = "";
  }
  else if(inputVerification(binary.value)) { //Verifies that the input is a binary number with the inputVerification function
    decimal.value = bin2Dec(binary.value);
  }
  else { //Returns an error message
    decimal.value = "Please type a number containing only '0's and '1's";
  }
}

function inputVerification(i) {
  let input = i;

  for(let j = 0; j < input.length; j++) {
    if(input.charAt(j) !== "0" && input.charAt(j) !== "1") { //If function detects a character different from 0 or 1, returns an error
      return false;
    }
  }

  return true; //If all characters are 0 and 1, continues with the app
}

function bin2Dec(b) { //Logic function
  let dec = parseInt(b, 2); //This saves dec as the decimal expression of the input if it is binary

  return dec;
}
