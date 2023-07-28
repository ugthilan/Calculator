const btns = document.querySelectorAll(".btn"); 
// const btns = document.getElementsByClassName('btn'); (dekama samanai)
const display = document.querySelector('#display')

for (btn of btns) {
  btn.addEventListener("click", function () {
    if(this.value == 'equal'){
        if(display.value !=''){
           let result = eval(display.value)
           return display.value = result;
        }
        return false;//samana nikan click klm mkut wenne neti wenn
    }
   
    if(this.value == 'clear'){
        return display.value = '';
    }

    else if (this.value === "√") {
        // Square root operation
        if (display.value !== "") {
          let number = parseFloat(display.value);
          if (number < 0) {
            display.value = "Error"; // Display "Error" for negative square roots
          } else {
            return display.value = Math.sqrt(number);
          }
        }
      } 


      else if (this.value === "**") {
        // Exponentiation operation (x^2)
        if (display.value !== "") {
          let number = parseFloat(display.value);
          display.value = Math.pow(number, 2);
        }
      }
      
      
   
    //methana tyenne click klma value ek display wen ek
        display.value +=this.value;
    });

    
//document.getElementById("power").innerHTML = Math.pow(this.value, 3);

}


	


















//Scientific-Calculator-Using-JS
//This is a simple project of Vanilla JavaScript (Scientific Calculator)