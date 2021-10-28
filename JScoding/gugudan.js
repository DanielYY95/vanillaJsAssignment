let flag = true;

while(flag){
    const Value = parseInt(prompt("1~9 정수를 입력하세요:"));
    if (!((Value<10) && (Value>0))){
        continue;
    } else{
        flag = false;
        for(i=1; i<=9; i++){
            console.log(Value+" * "+i+" = "+(Value*i));
        } 
    }
}


// ## 구조
// prompt 는 무한정 반복되야하니까 do-while 이나 while로
// 반복되야할 내용이 true / false 인지에 따라 반복문이 계속 진행될지 여부가 갈리니 flag 사용
// 1~9 사이의 정수가 아니면 cut
// else에서 flag = false;


// 1. 입력받는 건 prompt로
// 2. 입력받는 것을 정수로 바꾸기 위해 parseInt()를 붙여준다.
// 3. 조건: 10이상이면 다시 하라고
