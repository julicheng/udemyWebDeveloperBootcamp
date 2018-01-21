//check off specfic todos by clicking

$('li').click(function() {
	$(this).toggleClass('completed');
})