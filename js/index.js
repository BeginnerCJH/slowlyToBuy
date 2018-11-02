onload = function() {
    loadmore();
}

function loadmore() {
    $("[data-id='7']").tap(function() {
        $('.index-menu>a:nth-last-child(-n+4)').toggle();
    })
}