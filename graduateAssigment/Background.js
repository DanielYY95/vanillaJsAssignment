
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

