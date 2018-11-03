onload = function() {
    loadmore();
    gotop();
}

function loadmore() {
    $("[data-id='7']").click(function() {
        $('.index-menu>a:nth-last-child(-n+4)').slideToggle(300);
    })
}


function gotop() {
    $("#top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
    // $("#top").tap(function() {
    //     $("html,body").scrollTop(0);
    // });
}