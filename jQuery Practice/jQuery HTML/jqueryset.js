// Without callback function set value.

$(document).ready(function () {
    $("#btn1").click(function () {
        $("#test").text("Hello World!");
    });

    $("#btn2").click(function () {
        $("#test2").html("<b>Hello world!</b>");
    });

    $("#btn3").click(function () {
        $("#input1").val("Dolly Duck");
    });

    $("#btn4").click(function () {
        $("#link").attr("href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    })
});

// With callback function set value.

$(document).ready(function () {
    $("#btnShow").click(function (){
        $("#text1").text(function(i, orignText){
            return "Old text: "+orignText+" New text: Hello World! (index: "+i+")";
        });
    });

    $("#btnHtml").click(function (){
        $("#text2").html(function(i, orignText){
            return "Old Html: "+orignText+" New html: Hello <b> World! </b> (index: "+i+")";
        });
    });

    $("#btnValue").click(function (){
        $("#input2").val(function(i, orignText){
            return "Old Value: "+orignText+" New Value: Micky Mouse (index:"+i+")";
        });
    });

    $("#btnAttr").click(function(){
        $("#link2").attr("href", function(orignText){
            return orignText+ "/jquery";
        });
    });
});