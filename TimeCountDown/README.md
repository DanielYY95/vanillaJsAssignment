# TimeCountDown_VanilaJSAssignment

Created with CodeSandbox

1. new Date()

- 날짜들끼리 const하고 그냥 빼면 된다.

2. String, .padStart(2,"0")

- 숫자들을 문자화해야한다.

3. Math.ceil

4. 날짜, 시간, 분, 초 구하는 법
   일단 ms에 해당하는 new Date()를 구한다.
   이후, 1000으로 나누어 초단위로 만들어준다.
   차례대로, 앞 부분의 나머지 부분의 몫을 구해준다.
   마지막에 정수화해준다.
