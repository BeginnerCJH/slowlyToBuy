font();

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