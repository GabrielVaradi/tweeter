$(function() {
  const textMax = 140;
  $("#counter").html(textMax);

  $(".text-area").on("keyup", function(event) {
    const textLength = this.value.length;
    const textRemaining = textMax - textLength;
    const counter = $(this).siblings('#counter')
    counter.append('')
  
    if (textRemaining < 0) {
      counter
        .html(textRemaining)
        .css("color", "red");
    } else if (textRemaining >= 0) {
      counter
        .html(textRemaining)
        .css("color", "black");
    }
  });
});
