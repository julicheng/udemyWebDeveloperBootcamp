//check off specfic todos by clicking

$('li').click(function() {
	$(this).toggleClass('completed');
})

//click on x to delete todo
$('span').click(function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	}); //remove parent which is li
	event.stopPropagation(); //to prevent bubbling
})