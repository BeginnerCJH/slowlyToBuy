onload = function() {
    font();
    gotop();
}
window.onresize = function() {
    font();
}

function font() {
    var width = document.body.offsetWidth;
    var pageWidth = 640;
    var baseVal = 100;
    var fz = width * baseVal / pageWidth;

    document.querySelector('html').style.fontSize = fz + "px";
}

function gotop() {
    // $("#top").click(function() {
    //     $("html,body").animate({ scrollTop: 0 }, 500);
    // });
    $("#top").tap(function() {
        $("html,body").scrollTop(0);
    });
}