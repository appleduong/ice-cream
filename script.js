$(document).ready(function() {

$(".btn1").click(show1);

function show1() {
    $(".yellow").toggle();
}

$("#flav").click(() => {
    if ($(this).is(":checked")) {
      $("#input1").toggle();}})

})

