//menu header

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (190 >= currentScrollPos) {
        $(".menu-scroll").css("top", "-51px");

    } else {
        $(".menu-scroll").css("top", "0");

    }
};

$(".main-list-menu .extra").hover(function () {
    $("header .bottom").css("visibility", "visible");
    $("header .bottom").css("opacity", "1");

}, function () {
    $("header .bottom").css("opacity", "0");
    $("header .bottom").css("visibility", "hidden");
}
);

$(".main-list-menu .extra ul").hover(function () {
    $("header .bottom").css("visibility", "visible");
    $("header .bottom").css("opacity", "1");

}, function () {
    $("header .bottom").css("opacity", "0");
    $("header .bottom").css("visibility", "hidden");
}
);


//menu

$(".menu-click").click(function (e) {
    var opacity = $(".menu-area").css("opacity");
    if (opacity === "0") {
        $(".menu-area").css("visibility", "visible");
        $(".menu-area").css("opacity", "1");
    } else {
        $(".menu-area").css("opacity", "0");
        $(".menu-area").css("visibility", "hidden");
    }
});

menu_collapse();

$(window).resize(function () {
    menu_collapse();
});

function menu_collapse(e) {
    if ($(window).width() < 768) {
        $(".menu-area .not-nested, .menu-area .nested-box").addClass("collapse");
    } else {
        $(".menu-area .not-nested, .menu-area .nested-box").removeClass("collapse");
    }
}


$(".btn-menu").click(function() {

    //$('.collapsiblock').not(this).each(function () {
    //    $(this).addClass('collapsiblockCollapsed');
    //    $(this.target).animate({ height: 'hide', opacity: 'hide' }, slidespeed);
    //});

    //$(".menu-main .collapse").not(this).siblings().removeClass("show");

});