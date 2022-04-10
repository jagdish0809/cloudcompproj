

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $("nav").css({"background-color":"#0D362E"});
        }
        else{
            $("nav").css({"background-color":""});
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $(".top_btn").css({"display":"block"});
        }
        else{
            $(".top_btn").css({"display":"none"}) ;
        }
    })
})

const click = document.getElementsByTagName("nav")
function myFunction() {
    style.background = "#0D362E"
}





