$(document).ready(function() {
	generateProducts('images/izgin_collection1.jpg');
	generateProducts('images/izgin_collection2.jpg');

	$(window).scroll(function() {
		sT = $(this).scrollTop();
		kH = $("#knowledge").offset().top;
		
		if ($(window).width() > 1170) {
			if (sT >= kH - 200) {
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

		if (sT >= 100) {
			$('#header').css({
				'background': '#5a10d0ff',
				'border-bottom': '1px solid #0002',
				'box-shadow': '0 0 5px 0 #0003'
			});
		} else {
			$('#header').css({
				'background': '#5a10d000',
				'border-bottom': '1px solid #0000',
				'box-shadow': '0 0 5px 0 #0000'
			});
		}
	});

	$('#about-button').click(function() {
		$([document.documentElement, document.body]).animate({
	        scrollTop: $("#about-me").offset().top / 1.25 - $('#header').height()
	    }, 500);
	});
	$('#know-button').click(function() {
		$([document.documentElement, document.body]).animate({
	        scrollTop: $("#knowledge").offset().top - $('#header').height() - 40
	    }, 500);
	});
});
