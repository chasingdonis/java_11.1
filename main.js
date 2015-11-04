$(function() {
   $("div.event").hover(alter);    
});
    
function alter() {
   $(this).toggleClass("altered");
}



