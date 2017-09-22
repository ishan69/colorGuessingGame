var num = 6;
var colors = generateColors(num);
var squares = document.querySelectorAll(".square");
var colorPicked = pickcolor();
var color = document.querySelector("#color");
color.innerHTML=colorPicked;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var button=document.querySelector("#reset");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");

	num=3;
changeThree();
	newGame();

})
hard.addEventListener("click", function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
	num=6;
	newGame();
})


button.addEventListener("click", function(){
	newGame();
});

for(var i =0; i<colors.length; i++){
	squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
		var clicked=this.style.background;
		if(clicked==colorPicked){
			messageDisplay.innerHTML="correct";
		    changeColor(clicked);
		    h1.style.background=clicked;
		    button.innerHTML="PLAY AGAIN?"
            }
		else{
			this.style.background="#232323";
			messageDisplay.innerHTML="try again";
		}
	});
}
function changeColor(color){
	for(var i=0; i<colors.length;i++){
		squares[i].style.background=color;
	}
}
 function pickcolor(){
 	 var random=Math.floor(Math.random()*colors.length);
 	 return colors[random];
 }
 function generateColors(num){
 	var arr = [];
 	for (var i=0; i<num; i++){
 		arr[i]=threeRandomNumbers();
 	}
 	return arr;
 }
 function threeRandomNumbers(){
var str="";
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
str = str + "rgb"+ "(";
str= str + r +","+" ";
str= str + g +","+" ";
str= str + b +")";
return str;
 }
 function newGame(){
 	colors = generateColors(num);
	colorPicked = pickcolor();
	color.innerHTML=colorPicked;
	button.innerHTML="NEW COLORS";
	for(var i =0; i<colors.length; i++){
	squares[i].style.background = colors[i];
    }
    h1.style.background=steelblue;
 }
 function changeThree(){
 	for(var i=3;i<colors.length;i++){
squares[i].style.background="#232323";
 	}
 }
