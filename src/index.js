import "./styles.css";

//const 해야할 것: 메시지 2개, generate-input, guess-form과 input, hidden

const competeMsg = document.querySelector("#msg1");
const resultMsg = document.querySelector("#msg2");
const generateInput = document.querySelector("#generate-input");
const guessInput = document.querySelector("#guess-input");
const guessForm = document.querySelector("#guess-form");
const Hidden_ClassName = "hidden";
const GUESS_KEY = "myOne";
const COMPUTER_KEY = "computerOne";

function comeonMsg(event) {
  event.preventDefault(); // 기본동작 멈춰 // 성공.
  const myOne = guessInput.value; //입력된 값을 내 값으로
  const computerpick = generateInput.value;
  const computerOne = Math.floor(Math.random() * computerpick); //첫번째 칸 버림 정수화
  localStorage.setItem(GUESS_KEY, myOne);
  localStorage.setItem(COMPUTER_KEY, computerOne);
  const fight1 = localStorage.getItem(myOne);
  const fight2 = localStorage.getItem(computerOne); // localStorage에 저장하는게 맞는가???
  competeMsg.innerText =
    "You chose: ${myOne}, the machine chose: ${computerOne}";
  // 변수를 반영하지못하고있네....

  if (fight1 === fight2) {
    resultMsg.innerText = "You won!";
  } else {
    resultMsg.innerText = "You lost!";
  }
  /// 안 먹히는듯.... /// 원래는 크고 같고 작고로 승부하려고했으나 그냥 주어진대로 맞추면 이긴거, 틀리면 진거로 하자...
  /// text 나타내기는 잘 되는 것 같은디.... // 왜 true로 인식하는걸까?
  competeMsg.classList.remove(Hidden_ClassName); // 감춰진 텍스트 보여주기
  resultMsg.classList.remove(Hidden_ClassName); //텍스트 형성
  //이건 잘 되고 있는 듯
}

guessForm.addEventListener("submit", comeonMsg);
