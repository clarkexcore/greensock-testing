//This is the function of TweenMax
//TweenMax.to(target, duration, {vars})

//Variables
var logo = document.querySelector(".logo");
var bg = document.querySelector(".background");
var h1 = document.getElementById("h1");


//Animate Single stuff or w/e
// TweenMax.to('.logo', 1, {opacity:0});
// TweenMax.from(".logo", 3, {opacity: 0});
// TweenMax.from(".logo", 2, {scale: .5, opacity: 0});

//Animating Multiple Elements at once...
//TweenMax.from(".logo", 1, {scale: 0});
//TweenMax.from("h1", 1, {opacity: 0, scale:2, delay:2});
//TweenMax.from(".background", 1, {opacity:0, scale:0, delay:1 });

var tl = new TimelineMax();
tl.from(logo, .5, {scale:0});
tl.from(h1, .5, {opacity:0, scale:2});
tl.from(bg, .5, {scale:0});