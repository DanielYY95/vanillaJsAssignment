let Value;
let flag = true; 


function double(x){
    console.log(typeof x);    
    Value = Number(x)+Number(x); // string * 2 인데 number 타입의 value로 저장되네???
    console.log(typeof Value);
    return Value;
}

while(flag){
    const parameter = prompt("숫자형 값을 입력하세요.");
    console.log(typeof parameter);
    if(isNaN(parameter)){
        alert("다시 입력하세요.");
        continue;
    }else{
        double(parameter);
        console.log(Value);
        flag = false;
    }     
}

