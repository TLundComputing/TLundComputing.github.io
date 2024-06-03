$(document).ready(function(){

    // USCH Triggers
    $("#uschcycle1Trigger").click(function(){
        $("#"+$("#uschcycle1Trigger").attr("data-target")).addClass("is-active");
    });
    $("#uschcycle2Trigger").click(function(){
        $("#"+$("#uschcycle2Trigger").attr("data-target")).addClass("is-active");
    });
    $("#uschcycle3Trigger").click(function(){
        $("#"+$("#uschcycle3Trigger").attr("data-target")).addClass("is-active");
    });

    // MSCH Triggers
    $("#mschcycle1Trigger").click(function(){
        $("#"+$("#mschcycle1Trigger").attr("data-target")).addClass("is-active");
    });
    $("#mschcycle2Trigger").click(function(){
        $("#"+$("#mschcycle2Trigger").attr("data-target")).addClass("is-active");
    });
    $("#mschcycle3Trigger").click(function(){
        $("#"+$("#mschcycle3Trigger").attr("data-target")).addClass("is-active");
    });

    // LSCH Triggers
    $("#lschcycle1Trigger").click(function(){
        $("#"+$("#lschcycle1Trigger").attr("data-target")).addClass("is-active");
    });
    $("#lschcycle2Trigger").click(function(){
        $("#"+$("#lschcycle2Trigger").attr("data-target")).addClass("is-active");
    });
    $("#lschcycle3Trigger").click(function(){
        $("#"+$("#lschcycle3Trigger").attr("data-target")).addClass("is-active");
    });

    // Closing All Modals
    $(".modal-close").click(function(){
        $(".modal-close").parent().removeClass("is-active");
    });
    $(".modal-background").click(function(){
        $(".modal-background").parent().removeClass("is-active");
    });
});