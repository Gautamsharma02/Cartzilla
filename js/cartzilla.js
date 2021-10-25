
$( ".fa-search" ).click(function() {
    $( '.dis-none' ).slideToggle("");

});

$(".home-dropdown").click(function(){
   $(".dropdown-menu").toggleClass("show");
});

$(".fa-user").click(function(){
    $(".form").slideToggle("slow");
});
 $(".fa-times").click(function(){
    $(".form").slideUp("slow");
 });