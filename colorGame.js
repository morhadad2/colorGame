var numSquars = 6;
var colors =[];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes =  document.querySelectorAll(".mode");

init();

function init(){
  setUpModes();
  setUpSquares();
  reset();
}

function setUpModes(){
  for (var i = 0; i < modes.length; ++i){
      modes[i].addEventListener("click", function(){
        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquars = 3 : numSquars = 6;
        reset();
    })
  }
}

function setUpSquares(){
  for (var i = 0; i < squares.length; i++) {
    // Add click listners to all squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play again?";
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
}

function reset(){
  // generate all new Colors
  colors = generateRandomColors(numSquars);
  // Pick  a new color from array
  pickedColor = pickColor();
  // Change color display to match picked Color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colores";
  //Chwnge colors of squares
  for (var i = 0; i< squares.length; ++i){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  for(var i = 0; i< squares.length; ++i){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return (colors[random]);
}

 function generateRandomColors(num){
   // Make an array
   var arr = [];

   // Add random color to array
   for (var i = 0; i < num; i++) {
     arr.push(randomColor());
   }

   // Return array
   return arr;
 }

function randomColor(){
  // Generate red
  var r = Math.floor(Math.random() * 256);
  // Generate green
  var g = Math.floor(Math.random() * 256);
  // Generate blue
  var b = Math.floor(Math.random() * 256);

  // generate string
  return( "rgb(" + r +", " + g + ", " + b + ")" );
}
