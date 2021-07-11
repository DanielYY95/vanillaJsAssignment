
const CoinButton=document.body.querySelector(".coinButton");
const Images=["BabyDoge.jpg","Gazua.jfif","Noexpectripple.jpeg","Wipeout.png"];



function ChangeBackground(event);
    event.preventDefault();
    const ChosenCoin= Images[Math.floor(Math.random()*Images.length)]; //문제 없다
    const Image=document.createElement("img"); // 이게 제대로 안되고 있는듯.... console하면 HTMLImageElemnet{}로 나온다...
    Image.src=`CoinImage/${ChosenCoin}`;
    document.body.appendChild(Image); 
    console.log(Image); 
    
    

ChangeBackground();

CoinButton.addEventListener("click", ChangeBackground);