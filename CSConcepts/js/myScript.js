$(document).ready(function(){

    // USCH Triggers
    $("#uschcycle1Trigger").click(function(){
        $("#"+$("#uschcycle1Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#uschcycle2Trigger").click(function(){
        $("#"+$("#uschcycle2Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#uschcycle3Trigger").click(function(){
        $("#"+$("#uschcycle3Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });

    // MSCH Triggers
    $("#mschcycle1Trigger").click(function(){
        $("#"+$("#mschcycle1Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#mschcycle2Trigger").click(function(){
        $("#"+$("#mschcycle2Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#mschcycle3Trigger").click(function(){
        $("#"+$("#mschcycle3Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });

    // LSCH Triggers
    $("#lschcycle1Trigger").click(function(){
        $("#"+$("#lschcycle1Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#lschcycle2Trigger").click(function(){
        $("#"+$("#lschcycle2Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });
    $("#lschcycle3Trigger").click(function(){
        $("#"+$("#lschcycle3Trigger").attr("data-target")).addClass("is-active");
        $("html").addClass("is-clipped");
    });

    // Closing All Modals
    $(".modal-close").click(function(){
        $(".modal-close").parent().removeClass("is-active");
        $("html").removeClass("is-clipped");
    });
    $(".modal-background").click(function(){
        $(".modal-background").parent().removeClass("is-active");
        $("html").removeClass("is-clipped");
    });
});