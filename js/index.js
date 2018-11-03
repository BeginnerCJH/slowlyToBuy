onload = function() {
    loadmore();
    gotop();
}

function loadmore() {
    $("[data-id='7']").click(function() {
<<<<<<< HEAD
        $('.index-menu>a:nth-last-child(-n+4)').stop().slideToggle(300);
=======
        $('.index-menu>a:nth-last-child(-n+4)').slideToggle(300);
>>>>>>> 07df32ba1ea7d8484b1acc15c4fdc75535e3da3c
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