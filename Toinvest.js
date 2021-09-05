const investCoinForm= document.body.querySelector("#coinForm");
const investCoinInput= document.body.querySelector("#coinInput");
const LIST=document.body.querySelector("#list");
const COINLIST="CList"; 

let CList=[]; 

function paintCoin(newCoin){
  const li = document.createElement("li");
  li.id=newCoin.id;
  const span = document.createElement("span");
  span.innerText = newCoin.text+"          "; 
  const button = document.createElement("button");
  button.innerText="❌"; 
  button.addEventListener("click", deleteCoin);
  li.appendChild(span); 
  li.appendChild(button);
  LIST.appendChild(li);
}

function saveCoin(){
  localStorage.setItem(COINLIST,JSON.stringify(CList));
} 

function deleteCoin(event){
  const li= event.target.parentElement; 
  li.remove();
  CList=CList.filter((toDo)=>toDo.id !==parseInt(li.id));
  saveCoin();
}


function coinInvest(event){
  event.preventDefault();
  const newCoin={
    text:investCoinInput.value, id:Date.now() 
  };
  investCoinInput.value="";
  CList.push(newCoin); 
  paintCoin(newCoin);
  saveCoin(); 
} 



investCoinForm.addEventListener("submit", coinInvest);

const savedCoin=localStorage.getItem(COINLIST);

if (savedCoin !==null){
	const parsedCoin=JSON.parse(savedCoin); 
	CList=parsedCoin;
	parsedCoin.forEach(paintCoin);
}
