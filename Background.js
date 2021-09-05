
const CoinButton=document.body.querySelector(".coinButton");
const Images=["BabyDoge.jpg","Gazua.png","Noexpectripple.jpeg","Wipeout.png"];
const ChosenCoin= Images[Math.floor(Math.random()*Images.length)];
const Image=document.createElement("img");
Image.src=`CoinImage/${ChosenCoin}`;
document.body.append(Image); 
Image.classList.add("bgSize");

function ChangeBackground(event){
    const ChosenCoin= Images[Math.floor(Math.random()*Images.length)]; //문제 없다
    const changeIMG=document.body.querySelector(".bgSize");
    changeIMG.src=`CoinImage/${ChosenCoin}`;
}    

CoinButton.addEventListener("click", ChangeBackground);

// onclick으로 addEventListener 대신 할 수 있지만 하나의 이벤트만 처리 가능//
// 기본 사진이랑 바꿀 때 사진의 경로 신경쓸 것!!
// 인터넷 url을 활용하는 것이 좋겠다...
