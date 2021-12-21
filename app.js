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


/*------------ Scroll Event | back to the top arrow -----*/
/*window.addEventListener('scroll', function(){
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;

  console.log(scrollable);

  
})


/*------------------Topic Fade in */
/*const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
};

const appearonScroll = new IntersectionObserver(function(entries, appearonScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearonScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearonScroll.observe(fader);
})*/