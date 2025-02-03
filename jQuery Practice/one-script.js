$(function () {
    $("button").click(function () {
        $("p").hide(); // hide by element 
    });

    // $("button.hide").click(function () {
    //     $("#test").hide();
    // }) //Not working //hide by id

    $("#p1").click(function () {
        alert("You entered p1!");
    }); //mouseenter,mouseleave,click,dblclick,hover,mouseup,mousedown,focus,blur,on,
});