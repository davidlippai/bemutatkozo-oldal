/*Hamburger-Menu*/

$("#hamburgerMenu").click(function(){
  $(".menu").slideToggle("600")
  let firstLine = document.getElementById("firstLine");
  let secondLine = document.getElementById("secondLine");
  let thirdLine = document.getElementById("thirdLine");

  firstLine.classList.toggle("first-line-animation");
  secondLine.classList.toggle("second-line-animation");
  thirdLine.classList.toggle("third-line-animation");
}) 



/*name typing*/

let i = 0;
let txt = ' David Lippai';
let speed = 120;

function typeWriter(){
  if (i<txt.length) {
    document.getElementById("myname").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}

window.onload = typeWriter;




/*------------ Scroll Event | back to the top arrow -----*/

window.onscroll = function() {visibleArrow()};

function visibleArrow() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("go-up").className = "go-up-visible";
  } else {
    document.getElementById("go-up").className = "go-up-non-visible";
  }
}