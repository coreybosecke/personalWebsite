$(document).ready(function(){
  $("#landing-container").hide(0).fadeIn(800);
});

//$(document).ready(function(){
//  $(".centered-text").hide(0).delay(600).fadeIn(800);
//});

$(document).ready(function(){
  $(".scrollDown button").hide(0).delay(1500).fadeIn(1500);
});

$(document).ready(function() {
$(".scrollDown button").click(function() {
     $('html, body').animate({
         scrollTop: $(".content-title").offset().top
     }, 1500);
 });
});

$(document).ready(function() {
$(".grid-button button").click(function() {
     $('html, body').animate({
         scrollTop: $(".gallery-title").offset().top
     }, 1500);
 });
});

$('.cv-screenshot').hover(function() {
    $('.cvTitle', this).slideToggle(100, 'linear').display(100, 'linear');
});
