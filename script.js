// The below statement is shorthand for the:
// $(document).ready(function(){

// });

$(function(){

	$('.editable').click(function(){

		var existingText = $(this).text();
		$(this).hide();
		// Append a text input block
		$(this).parent().append('<textarea id="freeForm">');
		$(this).parent().append('<div class="button buttonYes">Accept Changes</div>');
		$(this).parent().append('<div class="button buttonNo">Cancel</div>');
		$('#freeForm').attr("placeholder", existingText);
		$('#freeForm').focus();
	});

	$('.container').on('click', '.button', function(){
		if ($(this).text() === 'Accept Changes') {
			$(this).siblings('p').text($('#freeForm').val());
			$('#freeForm, .button').remove();
			$('.container > p').show();
		} else {
			$('#freeForm, .button').remove();
			$('.container > p').show();
		}
	});
});