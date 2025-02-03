$(document).ready(function () {
    $("#chain").click(function (){
        $("#chaning").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

// you can write this way also :
// $(document).ready(function () {
//     $("#chain").click(function (){
//         $("#chaning").css("color", "red")
//         .slideUp(2000).
//         slideDown(2000);
//     });
// });