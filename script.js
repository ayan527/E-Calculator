const operators = ['+','-','*','/','.'];

function clearDisplayScreen () {
  document.getElementById("display").value = "";
}

function displayInScreen (value) {
  let element =  document.getElementById("display");
  
  if (element.value !== '') {
    let previousValue = String(element.value);
    let lastCharacter = previousValue.charAt(previousValue.length - 1);
    
    if ((operators.includes(lastCharacter) && (lastCharacter === value || operators.includes(value))) || (value === '.' && previousValue.includes(value))) {
      //console.log('returning');
      return;
    }
  }

  element.value += value;
  //console.log(element.value);
}

function evaluateDisplayScreen () {
 // let calculation = eval(document.getElementById("display").value);
 // document.getElementById("display").value = calculation;
 document.getElementById("display").value = eval(document.getElementById("display").value)
}