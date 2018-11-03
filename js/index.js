onload = function() {
    loadmore();
}

function loadmore() {
    $("[data-id='7']").click(function() {
        $('.index-menu>a:nth-last-child(-n+4)').stop().slideToggle(300);
    })
}