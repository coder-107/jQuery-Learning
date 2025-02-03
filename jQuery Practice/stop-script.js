// For stop() method without parameter

$(document).ready(function () {
    $("#flip-stop").click(function () {
        $("#panel-stop").slideDown(5000);
    });
    $("#stop-only").click(function () {
        $("#panel-stop").stop();
    });
});

// With Parameter or dynamic way 

$(document).ready(function(){
    $("#start").click(function(){
      $("#stop-text").animate({left: '100px'}, 5000);
      $("#stop-text").animate({fontSize: '3em'}, 5000);
    });
    
    $("#stop").click(function(){
      $("#stop-text").stop();
    });
  
    $("#stop2").click(function(){
      $("#stop-text").stop(true);
    });
  
    $("#stop3").click(function(){
      $("#stop-text").stop(true, true);
    }); 
  });