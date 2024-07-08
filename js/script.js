import { Modal } from "./modal.js"
import { Alert } from "./alert.js";
import { calculateIMC, notNumber } from "./utils.js"

const inputWeight = document.querySelector("#weight");   // Peso
const inputHeight = document.querySelector("#height"); // Altura
const form = document.querySelector("form");



form.onsubmit = (event) =>{
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightNotANumber = notNumber(weight) || notNumber(height);

    if (weightOrHeightNotANumber) {
         return Alert.open();
    }
    
    Alert.close();

    const result = calculateIMC(weight, height);

    displayResultMessage(result);
    
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.modalMsg.innerText = message;
    Modal.open();
}

inputWeight.oninput = () => Alert.close();
inputHeight.oninput = () => Alert.close();