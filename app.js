/*Hamburger-Menu*/

$("#hamburgerMenu").click(function(){
  $(".menu").slideToggle("600");
})

/*name typing*/

let i = 0;
let txt = 'David Lippai';
let speed = 80;

function typeWriter(){
  if (i<txt.length) {
    document.getElementById("myname").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}

window.onload = typeWriter;

/*-------------Services--------*/


/*$("#first-article").click(function(){
  $("#first-paragraph").slideToggle("600");
});

$("#second-article").click(function(){
  $("#second-paragraph").slideToggle("600");
});

$("#third-article").click(function(){
  $("#third-paragraph").slideToggle("600");
});*/