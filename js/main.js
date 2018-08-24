// Check off Todo item
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

// Delete todo item
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Add new todo item
$("input[type='text']").keypress(function(event) {
  // if enter is pressed
  if(event.which === 13){
    //grab text in input
    let todoText = $(this).val();
    $(this).val("");
    // create the list item it will make
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
  }
});

// Toggle the input area
$("#toggle-input").click(function(){
	$("input[type='text']").fadeToggle(300);
});
