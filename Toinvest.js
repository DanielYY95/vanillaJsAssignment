const investCoinForm= document.body.querySelector("#coinForm");
const investCoinInput= document.body.querySelector("#coinInput");
const LIST=document.body.querySelector("#list");
const COINLIST="CList"; 

let CList=[]; //array 형식으로 저장해야한다. 그리고 이전과 새로운 것들을 유지시키기위해 계속해서 업데이트하는 형식으로

function paintCoin(newCoin){
  const li = document.createElement("li");
  li.id=newCoin.id;
  const span = document.createElement("span");
  span.innerText = newCoin.text; 
  const button = document.createElement("button");
  button.innerText="❌"; //이모지: 윈도우 + . 
  button.addEventListener("click", deleteCoin);
  li.appendChild(span); 
  li.appendChild(button);
  LIST.appendChild(li);
}

function saveCoin(){
  localStorage.setItem(COINLIST,JSON.stringify(CList));
} // string 형태로 저장

function deleteCoin(event){
  const li= event.target.parentElement; //target이 대상의 부모
  li.remove();
  CList=CList.filter((toDo)=>toDo.id !==parseInt(li.id));
  saveCoin();
}

function coinInvest(event){
  event.preventDefault();
  const newCoin={
    text:investCoinInput.value, id:Date.now()  // array에 id와 text 부여
  };
  investCoinInput.value="";
  CList.push(newCoin); //먼저 array에 던져 넣고.
  paintCoin(newCoin);
  saveCoin(); // array 자체로 계속 저장해주는 것이다. 
} // 이 함수는 계속해서 제출할 때마다 값을 저장하고 화면에 보여주는 것까지!! 

investCoinForm.addEventListener("submit", coinInvest);

const savedCoin=localStorage.getItem(COINLIST);

if (savedCoin !==null){ //저장은 되지만 계속 화면에 나오게끔//
	const parsedCoin=JSON.parse(savedCoin); // array[1]=? 가 되게끔 하는 것이다. 인덱스 부여된다. 
	CList=parsedCoin; //인덱스 부여된 이전 것들을 계속해서 CoinList에 업데이트하고,,, 이 변수가 쓰일 때 미리 준비가 되는 것//
	parsedCoin.forEach(paintCoin);
}

/// button 2개가 submit을 공통적으로 반영하고 있다보니 계속 입력하려고해도 삭제가 이루어졌던 것.
/// HTML에서 ul 을 form 안에 두었고,,,, 그 form을 div로 묶지 않았다...
