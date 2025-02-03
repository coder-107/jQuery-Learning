// For noramal animation 

$(document).ready(function () {
    $(".animation").click(function () {
        $("#squre").animate({ left: '250px' }, "slow");
    });
});

// For manipulate multiple properties 

$(document).ready(function () {
    $("#multiplemanipulate").click(function () {
        $("#multiple").animate({
            left: '250px',
            opacity: '0.5',
            height: '50',
            width: '200px',
        }, "slow");
    });
});

// For Relative Value 

$(document).ready(function () {
    $("#relative-value").click(function () {
        $("#relative").animate({
            left: '300px',
            height: '-=50px',
            width: '+=100px',
            opacity: '0.3',
        });
    });
});

// For Pre-defined values

$(document).ready(function () {
    $("#predefine-btn").click(function () {
        $("#pre-define").animate({ height: 'toggle' }, "slow");
    });
});

// For Queue Animation 

$(document).ready(function () {
    $(".queue-btn").click(function () {
        var queueAnimation = $("#queue");

        queueAnimation.animate({ height: '1px', width: '1px', opacity: '0.4' }, "slow");
        queueAnimation.animate({ height: '100px', opacity: '0.4' }, "slow");
        queueAnimation.animate({ width: '100px', opacity: '0.8' }, "slow");
        queueAnimation.animate({ height: '150px', opacity: '0.4' }, "slow");
        queueAnimation.animate({ width: '150px', opacity: '0.8' }, "slow");
        queueAnimation.animate({ height: '100px', opacity: '0.4' }, "slow");
        queueAnimation.animate({ width: '100px', opacity: '0.8' }, "slow");
        queueAnimation.animate({ height: '1px', width: '1px', opacity: '0.4' }, "slow");
    })
})

// For Text Animation

$(document).ready(function () {
    $("#text-btn").click(function () {
        var textAnimate = $("#text-animation");

        textAnimate.animate({left: '100px'}, "slow");
        textAnimate.animate({width: '250px', height: '100px'}, "slow");
        textAnimate.animate({fontSize: '2.5rem'}, "slow");
    });
});