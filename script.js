const display = document.getElementById("display");


function appendToDisplay(input) {
   display.value += input;
   display.scrollLeft = display.scrollWidth; // Scroll to the right when new input is added
   
}



function clearDisplay() {
    display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax Error";
  }
    }


function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}



