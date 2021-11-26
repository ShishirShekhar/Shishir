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

    // Typing Animation. 
    var typed = new Typed(".typing", {
        strings: ["Web Developer.", "Data Analyst.", "Learning Enthusiast."],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true
    })
});