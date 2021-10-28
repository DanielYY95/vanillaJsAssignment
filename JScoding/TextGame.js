// 1. 캐릭터 설정
const Username = prompt("캐릭터 이름을 설정해주세요.");
const Job = prompt("직업을 선택해주세요. 전사 or 마법사");

// ## 사용할 함수들과 변수들
// 2. 싸움에 임한다는 메시지
const startmessage = console.log(`${Job} ${Username}님, 멧돼지 사냥에 나섭니다.`);

// 3. 멧돼지를 만났을 때 메시지
function alertMsg(){
    const meetBoar = prompt("선택하세요: 공격 또는 도망");

    switch(meetBoar)
        {   
            case "공격":
                alert("공격!");
                break;  
            case "도망":
                alert("도망!");
                break;
            default: //값이 유효하지않을 경우 다시 시작하도록
                alert("다시 선택하세요.");
                alertMsg();            
        }

}

// 4. 전사일 경우
function warrior(){
    const weapon = prompt("무기를 골라주세요. 칼, 도끼, 창");
    switch(weapon)
        {   
            case "칼":
                startmessage;
                break;  
            case "도끼":
                startmessage;
                break;
            case "창":
                startmessage;
                break;
            default: //값이 유효하지않을 경우 다시 시작하도록
                alert("다시 선택하세요.");
                warrior();
        }
}

// 5. 마법사일 경우
function magician(){
    const weapon = prompt("무기를 골라주세요. 나무막대, 플라스틱막대, 유리막대");
    switch(weapon)
        {   
            case "나무막대":
                startmessage;
                break;  
            case "플라스틱막대":
                startmessage;
                break;
            case "유리막대":
                startmessage;
                break;
            default: //값이 유효하지않을 경우 다시 시작하도록
                alert("다시 선택하세요.");
                magician();
        }
}

// 6. 본격적으로 게임에 임함. 직업이 유효한지 여부 
switch(Job){
    case "전사":
        warrior();
        break;
    case "마법사":
        magician();
        break;
    default:
        alert("게임을 시작할 수 없습니다.");
}

// 7. 값이 유효한 경우에만 메세지 진행
if ((Job== "전사")||(Job=="마법사")){
    alertMsg();
}

// 8. 게임 종료
console.log("게임 종료");
