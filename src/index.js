import "./styles.css";

//const 해야할 것: 메시지 2개, generate-input, guess-form과 input, hidden

const competeMsg = document.querySelector("#msg1");
const resultMsg = document.querySelector("#msg2");
const generateInput = document.querySelector("#generate-input");
const guessInput = document.querySelector("#guess-input");
const guessForm = document.querySelector("#guess-form");
const Hidden_ClassName = "hidden";
const GUESS_KEY = "";
const COMPUTER_KEY = "";

function comeonMsg(event) {
  event.preventDefault(); // 기본동작 멈춰
  const myOne = guessInput.value; //입력된 값을 내 값으로
  const computerOne = Math.floor(Math.random() * generateInput.value); //첫번째 칸 버림 정수화
  localStorage.setItem(GUESS_KEY, myOne);
  localStorage.setItem(COMPUTER_KEY, computerOne);
  const fight1 = localStorage.getItem(GUESS_KEY);
  const fight2 = localStorage.getItem(COMPUTER_KEY);
  check();
  gazua(fight1, fight2);
}

function gazua(fight1, fight2) {
  competeMsg.innerText = "You chose: ${fight1}, the machine chose: ${fight2}";
  competeMsg.classList.remove(Hidden_ClassName); // 감춰진 텍스트 보여주기
  resultMsg.classList.remove(Hidden_ClassName); //텍스트 형성
}

function check() {
  if (fight1 === fight2) {
    resultMsg.innerText = "Draw";
  } else if (fight1 > fight2) {
    resultMsg.innerText = "You won!";
  } else {
    resultMsg.innerText = "You lost!";
  }
}

guessForm.addEventListener("submit", comeonMsg);

// x는 컴퓨터의 수
// Math.random()*끝 숫자 0에서 10이면 끝 숫자는 10 ##이는 0~10까지의 실수를
// Math.random을 정수화하는 방법 (1) round() (2)ceil() ##올림같지만 1.01도 2로 만들어주는.... (3) floor() ## 버림 같지만 1.9999도 1로 만들어주는
// 여기서 우리가 사용할 random 정수화 방법은 Math.floor(Math.random()*끝숫자) 이다.

// css
//.twinkle {}
//#generate-input, guess-input:focus {animation-name: border-focus;}
//@keyframes border-focus {}

// if 문
// generate 입력, guess 입력 => 기본동작 멈춰+값을 받는다. => 메시지 설정 => 메시지 보여주기

// local Storage 안에 있는 KEY 설정을 잘 이해 못한 것 같다....
