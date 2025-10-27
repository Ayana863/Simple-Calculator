// get input 
const input = document.getElementById("input");

// 
const displayNumber = (number) => {

    // Concatenates two strings and stores value in the input field. 
    input.value = input.value + number;


};

// Reset inputfield
const reset = () => {
    input.value = ""

}

// square
const square = () => {
    input.value = input.value * input.value;
}

// cube
const cube=()=>{
    input.value=input.value * input.value * input.value;
}

const Result = () => {
    // eval() function takes string and performs operation like *,/,+,-
    input.value=eval(input.value)
}
