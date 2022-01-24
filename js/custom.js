jQuery(document).ready(function () {

	"use strict";
	// Your custom js code goes here.

});

$(document).ready(function () {
	$('#headerVideoLink').magnificPopup({
		type: 'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
});

$(document).ready(function () {
	$('#bt1').click(function () {
		$('#fr1').attr('action',
			'mailto:test@test.com?subject=' +
			$('#tb1').val() + '&body=' + $('#tb2').val());
		$('#fr1').submit();
	});
});