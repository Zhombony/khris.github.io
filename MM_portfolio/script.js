 	//**adding a hover to the nav bar */

$(document).ready(function(){
    $(".animated").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "rgba(230,230,230,0.75)");
    });
  });
 	
//**every element except for the nav bar slowly fades in when the page is loaded */

$( document ).ready(function() {
 
    $("#welcome").fadeIn(1000);
    $("#about").fadeIn(2500);
    $("#gallery").fadeIn(2500);
  
    
    //** this section below allows the page to smoothly scroll to the linked element from the navbar
$(".about").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });
 
  $(".gallery").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#gallery").offset().top
    }, 1000);
});








