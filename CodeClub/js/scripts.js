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
  $("#week3Btn").click(function() {
    $("#week3Content").toggleClass("w3-show");
    $("#week3Btn").toggleClass("accent");
  });
  $("#week4Btn").click(function() {
    $("#week4Content").toggleClass("w3-show");
    $("#week4Btn").toggleClass("accent");
  });
  $("#week5Btn").click(function() {
    $("#week5Content").toggleClass("w3-show");
    $("#week5Btn").toggleClass("accent");
  });
  $("#week6Btn").click(function() {
    $("#week6Content").toggleClass("w3-show");
    $("#week6Btn").toggleClass("accent"); 
  });
  $("#week7Btn").click(function() {
    $("#week7Content").toggleClass("w3-show");
    $("#week7Btn").toggleClass("accent"); 
  });
  $("#week8Btn").click(function() {
    $("#week8Content").toggleClass("w3-show");
    $("#week8Btn").toggleClass("accent"); 
  });
  /*
  $("#week9Btn").click(function() {
    $("#week9Content").toggleClass("w3-show");
    $("#week9Btn").toggleClass("accent"); 
  });
  $("#week10Btn").click(function() {
    $("#week10Content").toggleClass("w3-show");
    $("#week10Btn").toggleClass("accent"); 
  });
  */
  
  $(".modal-close").click(function(){
	  $(".w3-modal").hide();
  });
});
