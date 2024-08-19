/*
 */
 $(function () {
    'use strict';

     var placeholderContent = $("#divLoadingPlaceholder").html();


     if (placeholderContent) {
         var times = Math.floor(calculateHeight() / $("#divLoadingPlaceholder").height());
         $("#divLoadingPlaceholder").append(placeholderContent.repeat(times));
     }

 });


function calculateHeight(offset) {
    const mainHeaderHeight = $(".headermenu").height();
    const headerHeight = $(".card #headerCombined") ? $("#headerCombined").height() + 20 : $(".pageHeader").height() + $(".header").height();
    return $(window).height() - mainHeaderHeight - headerHeight - (offset || 10);
}

function setTableHeight() {
    var listHeight = calculateHeight();
    $("[data-role='list]'").css("overflow", "auto");
    $("[data-role='list']").css("overflow-x", "hidden");
    $("[data-role='list']").height(listHeight);
    $(window).resize(function () {
        $("[data-role='list']").height(calculateHeight());
    });
}