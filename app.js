$(document).ready(function(){
var rightAnswer = 0
// var colors = ["red", "yellow", "blue", "green"];
$('body').append('<div class="bluebox"></div>');
$('body').append('<div class="redbox"></div>');
$('body').append('<div class="greenbox"></div>');
$('body').append('<div class="yellowbox"></div>');
console.log(rightAnswer);


    function randomNumber(min, max){
      rightAnswer = Math.floor(Math.random() * (1 + max - min) + min);
    }

    randomNumber(1,4);
    console.log(rightAnswer);

      if(rightAnswer == 1) {
        alert("Click Blue!");
        $(".bluebox").on("click", function(){
          alert("Great Job!");
          randomNumber(1,4);
        });
          $(".yellowbox, .greenbox, .redbox").on("click", function(){
            alert("Try Again!");
        })
      }else if(rightAnswer == 2){
        alert("Click Red!");
        $(".redbox").on("click", function(){
          alert("Great Job!");
          randomNumber(1,4);
        })
        $(".yellowbox, .greenbox, .bluebox").on("click", function(){
          alert("Try Again!");
        })
      }else if(rightAnswer == 3){
        alert("Click Green!");
        $(".greenbox").on("click", function(){
          alert("Great Job!");
          randomNumber(1,4);
        })
        $(".yellowbox, .bluebox, .redbox").on("click", function(){
          alert("Try Again!");
        })
      }else if(rightAnswer == 4){
        alert("Click Yellow!");
        $(".yellowbox").on("click", function(){
          alert("Great Job!");
          randomNumber(1,4);
        })
        $(".bluebox, .greenbox, .redbox").on("click", function(){
          alert("Try Again!");
        })
      }


console.log(rightAnswer);



});
