# VanilaJSassignment

Created with CodeSandbox

if (a === b) {
resultMsg.innerText = "You won!";
} else {
resultMsg.innerText = "You lost!";
}
/// 안 먹히는듯.... /// 원래는 크고 같고 작고로 승부하려고했으나 그냥 주어진대로 맞추면 이긴거, 틀리면 진거로 하자...
/// text 나타내기는 잘 되는 것 같은디....

JS
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

HTML
// 흠,,, form 한 개에 input 여러 개로 해야하는건가???
// input 창 클릭했을 때 색깔 효과
// input 창의 위아래
// submit event 때 메시지 You chose: "---.value", the machine chose: ""
// 메시지에 조건(hidden까지)
// 랜덤 효과
// localStorage에 저장하는 것
