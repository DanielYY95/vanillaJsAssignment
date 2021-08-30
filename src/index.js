import "./style.css";

const competeMsg = document.querySelector("#msg1");
const resultMsg = document.querySelector("#msg2");
const generateInput = document.querySelector("#generate-input");
const guessInput = document.querySelector("#guess-input");
const guessForm = document.querySelector("#guess-form");
const Hidden_ClassName = "hidden";

function comeonMsg(event) {
  event.preventDefault();
  const myOne = guessInput.value;
  const computerOne = Math.floor(Math.random() * generateInput.value + 1);
  competeMsg.innerText = `You chose: ${myOne}, the machine chose: ${computerOne}.`;

  if (parseInt(myOne) === parseInt(computerOne)) {
    resultMsg.innerText = "You win!";
  } else {
    resultMsg.innerText = "You lost!";
  }
  competeMsg.classList.remove(Hidden_ClassName);
  resultMsg.classList.remove(Hidden_ClassName);
}
guessForm.addEventListener("submit", comeonMsg);
