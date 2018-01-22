//check off specfic todos by clicking
//add on click to parent (ul) rather than lis because lis will 
//change in future
//when li is clicked inside of ul
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
})

//click on x to delete todo
//when span is clicked inside of a ul
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	}); //remove parent which is li
	event.stopPropagation(); //to prevent bubbling
})

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val() 
		//create a new li and add to ul
		$('ul').append("<li><span>X</span> " + todoText + "</li>");
		//clear input
		$(this).val("");
	}
})