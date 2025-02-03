// jQuery Get text(), html(), val(), attr()

$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: "+$("#test").text());
    });
});

$(document).ready(function () {
    $("#btn2").click(function () {
        alert("HTML: "+$("#test").html());
    });
});

$(document).ready(function () {
    $("#btn3").click(function (){
        alert("Value : "+$("#test2").val());
    });
});

$(document).ready(function () {
    $("#btn4").click(function (){
        alert("Attribute : "+$("#link").attr("href"));
    });
});