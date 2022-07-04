
//top news slider
var Topnews = $('.top-news .slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dotsContainer: '#top-news-dots',
})
$("#top-news-dots li").on("click", function () {
    Topnews.trigger("to.owl.carousel", [$(this).index(), 300]);

});

// tabs
$(document).ready(function () {


    $.get("/ReportApi/CreatePageVisit", { id: 0, type: "mainPage" }, function (result) {


    });

    setTimeout(function() {
        var hRight = $(".top-news").outerHeight() + $(".more-top-news").outerHeight();

        $(".tabs .tab-content ").css("max-height", hRight);
        // tabs2
        $(".tabs2 .tab-pane").css("max-height", $(".h-get").height());

    }, 1000);
});



//video 
//var player = videojs('my-player');


//slider news
$('.slider-news .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

//Select news 

//function remover() {
//    var list = $(".custom-title ul").innerWidth();
//    var width = $(".custom-title .red").innerWidth() - 277;
//    if (list > width) {
//        $(".add-me").css("display", "block");
//        var innertext = $(".custom-title ul li").children().eq(1).text();
//        $(".custom-title ul li").children().eq(1).remove();
//        $(".add-me").append("<option>" + innertext + "</option>");
//        remover();
//    }

//}
//remover();

//tabs bottom 
$(".custom-title ul li a").click(function (e) {
    //$(this).removeClass("active");
});


$(".last-news .tabs-nav .navs a").click(function () {

    $(".last-news .tabs-nav .navs").find("a").removeClass("active");

    var id = $(this).attr("data-id");

    var tabId = $(this).attr("href").substring(1);

    changeLastNews(id, tabId);

});

$(".last-news .select-category select").on('change', function (e) {

    var optionSelected = $(this).find("option:selected");
    var id = optionSelected.val();
    var tabId = optionSelected.attr("data-tabid");

    changeLastNews(id, tabId);

    $(".last-news .tab-content *").removeClass("active");

    $(".last-news .tab-content #" + tabId).addClass("active");

});


function changeLastNews(id, tabId) {

    if ($(".last-news").find("#" + tabId).children().length != 0)
        return true;

    $.get("/api/GetLastNews", { id }, function (result) {

        console.log(result)
        var first = result[0];
        result.shift();
        var other = result;
        var template = $("#lastnews-template").html();

        var templateScript = Handlebars.compile(template);

        var context = { "first": first, "other": other };

        var html = templateScript(context);

        $(".last-news").find("#" + tabId).append(html);
    });
}

$(".events-box .nav-item a").click(function () {

    $(".events-box .nav-tabs").find("a").removeClass("active");

    var id = $(this).attr("data-id");

    var tabId = $(this).attr("href").substring(1);

    //alert(id)

    //alert(tabId)

    //alert($(".last-news").find("#" + tabId))
    if ($(".events-box").find("#" + tabId).find(".simplebar-content").children().length != 0)
        return true;

    $.get("/api/GetTopCategory", { id }, function (result) {

        //console.log(result)
        var template = $("#events-template").html();

        var templateScript = Handlebars.compile(template);

        var html = templateScript(result);

        //console.log(html)

        $(".events-box").find("#" + tabId).find(".simplebar-content").append(html);
    });

});

$(".top-tabs-box .last-news").click(function () {

    var tabId = $(this).attr("href").substring(1);

    //alert($(".last-news").find("#" + tabId))
    if ($(".top-tabs-box").find("#" + tabId).find(".simplebar-content").children().length != 0)
        return true;

    $.get("/api/GetSiteLastNews", { itemCount: 15, hasImage: false }, function (result) {

        //console.log(result)
        var template = $("#top-tabs-box-template").html();

        var templateScript = Handlebars.compile(template);

        var html = templateScript(result);

        //console.log(html)

        $(".top-tabs-box").find("#" + tabId).find(".simplebar-content").append(html);
    });

});


$(".top-tabs-box .most-visits").click(function () {

    //$(".events-box .nav-tabs").find("a").removeClass("active");


    var tabId = $(this).attr("href").substring(1);

    //alert(id)

    //alert(tabId)

    //alert($(".last-news").find("#" + tabId))
    if ($(".top-tabs-box").find("#" + tabId).find(".simplebar-content").children().length != 0)
        return true;

    $.get("/api/GetMostVisitedNewstextAllSite", { itemCount: 15, hasImage:false  }, function (result) {

        var template = $("#top-tabs-box-template").html();

        var templateScript = Handlebars.compile(template);

        var html = templateScript(result);

        //console.log(html)

        $(".top-tabs-box").find("#" + tabId).find(".simplebar-content").append(html);
    });

});