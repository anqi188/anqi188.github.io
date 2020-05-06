$(document).ready(function() {
    // ----- Logic
    // Viewport
    $("#jQueryWindowWidth").text(parseInt($(window).width()));
    $("#jQueryWindowHeight").text(parseInt($(window).height()));
    $("#windowInnerWidth").text(parseInt(window.innerWidth));
    $("#windowInnerHeight").text(parseInt(window.innerHeight));
    $("#windowOuterWidth").text(parseInt(window.outerWidth));
    $("#windowOuterHeight").text(parseInt(window.outerHeight));

    // Device / Screen
    $("#windowScreenWidth").text(parseInt(window.screen.width));
    $("#windowScreenHeight").text(parseInt(window.screen.height));
    $("#windowScreenAvailWidth").text(parseInt(window.screen.availWidth));
    $("#windowScreenAvailHeight").text(parseInt(window.screen.availHeight));

    // Document
    $("#jQueryDocumentWidth").text(parseInt($(document).width()));
    $("#jQueryDocumentHeight").text(parseInt($(document).height()));
    $("#documentDocumentElementClientWidth").text(parseInt(document.documentElement.clientWidth));
    $("#documentDocumentElementClientHeight").text(parseInt(document.documentElement.clientHeight));
    $("#documentDocumentElementOffsetWidth").text(parseInt(document.documentElement.offsetWidth));
    $("#documentDocumentElementOffsetHeight").text(parseInt(document.documentElement.offsetHeight));
    $("#documentDocumentElementScrollWidth").text(parseInt(document.documentElement.scrollWidth));
    $("#documentDocumentElementScrollHeight").text(parseInt(document.documentElement.scrollHeight));
});

