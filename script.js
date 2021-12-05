$(document).ready(function() {
	$(window).scroll(function() {
		sT = $(this).scrollTop();
		kH = $('#knowledge').height();
		
		if ($(window).width() > 1170) {
			if (sT > kH) {
				$('#know-html').css({
					'opacity': '1',
					'top': '0'
				});
				setTimeout(function() {
					$('#know-css').css({
						'opacity': '1',
						'top': '0'
					});
					setTimeout(function() {
						$('#know-js').css({
							'opacity': '1',
							'top': '0'
						});
						setTimeout(function() {
							$('#know-ph').css({
								'opacity': '1',
								'top': '0'
							});
						}, 200);
					}, 200);
				}, 200);
			}
		}
	});
});
