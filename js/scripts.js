var main = function() {
	$('.button').click(workButtonClick);
}

var workButtonClick = function() {
	$(document).scrollTop($('.Work').offset().top);
}

$(document).ready(main);