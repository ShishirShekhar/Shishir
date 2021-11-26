$(document).ready(function() {
    
    $("#menu").click(function() {
        $(this).toggleClass("fa-times");
        $(this).toggleClass("active")
        $("header").toggleClass("active");
    });

    $(window).on("scroll load", function() {
        $("#menu").removeClass("fa-times");
        $("#menu").removeClass("active");
        $("header").removeClass("active");
    });

});