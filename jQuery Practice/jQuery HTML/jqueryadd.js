// For Append ()

$(document).ready(function (){
    $("#btnAppendTxt").click(function () {
        $("#test").append("<b> Appended paragraph </b>");
    });

    $("#btnAppendList").click(function (){
        $("ol").append("<li>Appended List item 4</li>");
    });
});

// For Prepend ()

$(document).ready(function (){
    $("#btnPreTxt").click(function (){
        $("#test1").prepend("<b> Prepend text and also, </b>");
    });

    $("#btnPreList").click(function (){
        $("ol").prepend("<li>prepend list item </li>");
    });
});

// For After() & Before()

$(document).ready(function (){
    $("#btn1").click(function (){
        $("img").before("<b>Before IMG Element </b>");
    });

    $("#btn2").click(function (){
        $("img").after("<i> After IMG Element </i>");
    });
});
