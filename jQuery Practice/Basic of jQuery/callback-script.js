// callback parameter
$(document).ready(function () {
    $("#hide-callback").click(function () {
        $("#hello").hide("slow", function (){
            alert("The P element is now hidden");
        });
    });
});

$(document).ready(function () {
    $("#show-callback").click(function(){
        $("#hello").show("slow", function () {
            alert("The P element is visible");
        });
    });
});

//no callback parameter

$(document).ready(function () {
    $("#hide-half").click(function () {
        $("#hi").hide("Slow");
        alert("This P element is now hidden");
    });
});


$(document).ready(function () {
    $("#show-half").click(function () {
        $("#hi").show("Slow");
        alert("This P element is visible");
    });
});