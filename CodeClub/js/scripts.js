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
  $("#week1Btn").click(function() {
    $("#week1Content").toggleClass("w3-show");
    $("#week1Btn").toggleClass("accent");
  });
  $("#week2Btn").click(function() {
    $("#week2Content").toggleClass("w3-show");
    $("#week2Btn").toggleClass("accent");
  });
});