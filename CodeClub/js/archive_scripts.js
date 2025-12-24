$(document).ready(function () {
  $("#stylePicker").change(function () {
    let val = $("#stylePicker").children("option:selected").val();
    if (val === "cd") {
      $("link[href='./css/codeclub.css']").attr('href', './css/dojo.css');
      $("#mainTitle").text("CoderDojo");
    } else {
      $("link[href='./css/dojo.css']").attr('href', './css/codeclub.css');
      $("#mainTitle").text("Code Club @ Bootham");
    }
  });
  $(".modal-close").click(function () {
    $(".w3-modal").hide();
  });
  $("#spring25Btn").click(function () {
    $("#spring25").show();
  });
  $("#summer25Btn").click(function() {
    $("#summer25").show();
  });
  $("#winter25Btn").click(function() {
    $("#winter25").show();
  });
  $("button").click(function(){
    let id = $(this).attr('id');
    if(id.localeCompare("summer25Btn") != 0 && id.localeCompare("spring25Btn") != 0 && id.localeCompare("winter25Btn")) {
      $("#" + id.slice(0,id.length - 3) + "Content").toggleClass("w3-show");
      $("#" + id).toggleClass("accent");
    }
  });
});
