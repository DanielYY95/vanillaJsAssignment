## HTML

1. 다중 input
   form 안에 input을 여러 개 둘 수 있으며, type="submit"인 input이 나오기 전까지의 input들을 submit 가능하다.

2. 값을 입력해야만 작동하기
   input 태그 안에 required만 작성하면 된다.

3. label 태그를 통해 글씨와 input을 한번에 품을 수 있다.

## CSS

1. .hidden을 통해 JS에서 classList.remove 혹은 add 등을 활용

2. input:focus{} input에 포커스되고 있을 때,
   그림자효과: outline과 box-shadow:a b c d 를 활용

3. input type="number"를 하면 자동적으로 화살표 위아래 형성. default는 0.
   ## 화살표 투명도(숫자 위아래 1씩 증감하는거 없애기)
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
   opacity: 1;
   }

## JS

1. const를 해야할 것들을 미리 생각하기

2. 변수값들은 오류가 많이 난다.
   typeof와 console.log(), parseInt() 등을 잘 활용하자.

3. addEventListener()를 쓸 때, if문과 다른 함수들을 같이 쓴다면 차근차근 순서대로..

4. .innerText =
   "You chose:" + myOne + ", the machine chose:" + computerOne;
   => 이 때 myOne과 computerOne은 str이다..
   ## 작은 따옴표, 큰 따옴표가 아니라 백틱`이었네..
   `You chose: ${myOne}, the machine chose: ${computerOne}`; 성공
