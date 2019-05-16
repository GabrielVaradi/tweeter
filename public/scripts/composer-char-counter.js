$(function() {
  const textMax = 140;
  //Sets the counter to 140
  $("#counter").html(textMax);

  //Calculates the remaining character left by substracting the length of the text in the form to the maximum allowed
  $(".text-area").on("keyup", function(event) {
    const textLength = this.value.length;
    const textRemaining = textMax - textLength;
    const counter = $(this).siblings('#counter')
    counter.append('')
  
    //If the counter is under 0, it turns red
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
