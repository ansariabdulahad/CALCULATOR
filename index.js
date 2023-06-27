// GLOBAL VARIABLES
let result = document.querySelector("#result");

const display = (number) => {
    result.value += number;
}

const calculate = () => {
    let final_number = result.value;
    let final_result = eval(final_number);
    result.value = final_result;
}

const clrs = () => {
    result.value = "";
}
const del = () => {
    result.value = result.value.slice(0, -1);
}