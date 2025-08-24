$(document).ready(function() {
  $("#stylePicker").change(function() {
    let val = $("#stylePicker").children("option:selected").val();
    if (val === "cd") {
      $("link[href='./css/codeclub.css']").attr('href', './css/dojo.css');
      $("#mainTitle").text("CoderDojo");
    } else {
      $("link[href='./css/dojo.css']").attr('href', './css/codeclub.css');
      $("#mainTitle").text("Code Club @ Bootham");
    }
  });
  $("button").click(function(){
    let id = $(this).attr('id');
    $("#" + id.slice(0,id.length - 3) + "Content").toggleClass("w3-show");
    $("#" + id).toggleClass("accent");
  });
});
