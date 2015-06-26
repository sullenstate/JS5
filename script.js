// The below statement is shorthand for the:
// $(document).ready(function(){

// });

$(function(){

	$('.container > p').click(function(){

		// Fade the text out
		$('.container').children().hide();
		// Append a text input block
		$('.container').append('<textarea id="freeForm">');
		$('.container').append('<div class="button buttonYes">Accept Changes</div>');
		$('.container').append('<div class="button buttonNo">Cancel</div>');
		$('#freeForm').focus();
	});

	$('.container').on('click', '.button', function(){
		if ($(this).text() === 'Accept Changes') {
		$('.container').find('p').text($('#freeForm').val());
		$('#freeForm, .button').remove();
		$('.container > p').show();
		} else {
		$('#freeForm, .button').remove();
		$('.container > p').show();
		}
	});

	

});