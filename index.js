var count=document.querySelectorAll("button").length;

for(var i=0; i<count ; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
var chara;
chara=this.innerHTML;
playmusic(chara);
buttonAnimation(chara);
});
}

document.addEventListener("keypress",function(event){
  var chara;
  chara=event.key;
  playmusic(chara);
  buttonAnimation(chara);
  });

function buttonAnimation(currentbutton){
  var pressedbutton=document.querySelector("."+currentbutton);
  pressedbutton.classList.add("pressed");
  setTimeout(function () { pressedbutton.classList.remove("pressed");

  }, 100);
}
function playmusic(chara){
    if(chara==="w")
    {
      var audio=new Audio('sounds/crash.mp3');
       audio.play();
    }
    else if(chara==="a")
    {
      var audio=new Audio('sounds/kick-bass.mp3');
       audio.play();
    }
    else if(chara==="s")
    {
      var audio=new Audio('sounds/snare.mp3');
       audio.play();
    }
    else if(chara==="d")
    {
      var audio=new Audio('sounds/tom-1.mp3');
       audio.play();
    }
    else if(chara==="j")
    {
      var audio=new Audio('sounds/tom-2.mp3');
       audio.play();
    }
    else if(chara==="k")
    {
      var audio=new Audio('sounds/tom-3.mp3');
       audio.play();
    }
    else if(chara==="l"){
      var audio=new Audio('sounds/tom-4.mp3');
       audio.play();
    }

  }
