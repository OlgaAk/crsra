$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if ( $("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause").addClass("fa-play");
        } else {
        $("#mycarousel").carousel('cycle');
         $("#carousel-button").children("span").removeClass("fa-play").addClass("fa-pause");
    }
});

$("#loginButton").click(function(){
    $("#loginModal").modal('toggle')
});

$("#loginCloseButton, #loginCancelButton").click(function(){
    $("#loginModal").modal('hide')
});

$("#reserveModalButton").click(function(){
    $("#reserveModal").modal('toggle')
});

$("#reserveModalCloseButton, #reserveModalCancelButton").click(function(){
    $("#reserveModal").modal('hide')
});


});