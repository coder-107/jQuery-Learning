$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $(document).ready(function () {
        $("#show").click(function () {
            $("p").show();
        })
    });
});

$(document).ready(function () {
    $("#fadein").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function () {
    $("#fadeout").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});

$(document).ready(function () {
    $("#toggle").click(function () {
        $("#first").fadeToggle();
        $("#second").fadeToggle("slow");
        $("#thired").fadeToggle(3000);
    });
});

$(document).ready(function () {
    $("#fade-to").click(function () {
        $("#red").fadeTo("slow", 0.15);
        $("#green").fadeTo("slow", 0.4);
        $("#blue").fadeTo("slow", 0.7);
    });
});

//slide
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#panelslide").click(function () {
        $("#up-panel").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#flip-toggle").click(function () {
        $("#panel-toggle").slideToggle("slow");
    });
});