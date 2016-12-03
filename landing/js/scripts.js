$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {
  $('#subscribe').submit(function(e) {
		e.preventDefault();

		var $form           = $('#subscribe');
		var submit          = $('#subscribe-button');
		var ajaxResponse    = $('#subscription-response');
		var email           = $('#subscriberEmail').val();

		$.ajax({
			type: 'POST',
			url: 'php/subscribe.php',
			dataType: 'json',
			data: {
				email: email
			},
			cache: false,
			beforeSend: function(result) {
				submit.val("Joining...");
			},
			success: function(result) {
				if(result.sendstatus == 1) {
					ajaxResponse.html(result.message);
					$form.fadeOut(500);
				} else {
					ajaxResponse.html(result.message);
					submit.val("Join");
				}
			}
		});
	});
});

function valid_email_address(email)
{
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	return pattern.test(email);
}