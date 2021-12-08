var productCount = 0;
var LH;
var RH;
var product = 1;
var product__slider;

function generateProducts(image) {
	let element = $('.product__generator');
	setTimeout(function() {
		productCount += 1;

		if (!product__slider) {
			// CREATE PRODUCT SLIDER WRAPPER
			product__slider = document.createElement('div');
			product__slider.setAttribute('class', 'product__slider');
			element.append(product__slider);
		} else {
			return false;
		}
	
		// CREATE PRODUCT WRAPPER
		let product__wrapper = document.createElement('div');
		product__wrapper.setAttribute('class', 'product__wrapper product__wrapper-'+productCount);
		$('.product__slider').append(product__wrapper);

		// CREATE PRODUCT IMG
		let product__img = document.createElement('img');
		product__img.setAttribute('src', image);
		product__img.setAttribute('class', 'product__img product__img-'+productCount);

		// PUT IMAGE INSIDE WRAPPER
		product__wrapper.appendChild(product__img);

		// CSS STYLE
		element.css({
			'width': '100%',
			'height': '550px',
			'position': 'relative',
			'overflow-x': 'hidden'
		});
		$('.product__wrapper').css({
			'width': '100%',
			'height': '100%',
			'position': 'absolute',
			'top': '0',
			'left': '0',
		});
		$('.product__img').css({
			'max-width': '80%',
			'max-height': '90%',
			'position': 'absolute',
			'top': '50%',
			'left': '50%',
			'transform': 'translate(-50%, -50%)'
		});
		document.querySelectorAll('.product__wrapper')[0].style.left = "0";
		$('.product__slider').css({
			'width': '100%',
			'height': '100%',
			'background': '#eaeaea',
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'transition': 'all 200ms ease-in-out'
		});

		// CREATE HANDLES
		if (!LH) {
			LH = document.createElement('div');
			LH.setAttribute('class', 'product-handle product-handle-left');
			element.prepend(LH);
			LH.innerHTML = '<i class="fas fa-chevron-left"></i>';
		} else {
			return false;
		}
		if (!RH) {
			RH = document.createElement('div');
			RH.setAttribute('class', 'product-handle product-handle-right');
			element.prepend(RH);
			RH.innerHTML = '<i class="fas fa-chevron-right"></i>';
		} else {
			return false;
		}

		// STYLE PRODUCT HANDLES
		setTimeout(function() {
			$('.product-handle').css({
				'position': 'absolute',
				'z-index': '1',
				'width': '50px',
				'height': '50px',
				'border-radius': '50%',
				'background': '#0000000a',
				'top': '50%',
				'transform': 'translateY(-50%)'
			});
			$('.product-handle i').css({
				'color': '#000',
				'position': 'absolute',
				'top': '50%',
				'left': '50%',
				'transform': 'translate(-50%, -50%)',
				'font-size': '20px'
			});
			$('.product-handle-left').css({
				'left': '10px'
			});
			$('.product-handle-right').css({
				'right': '10px'
			});
		});

		// FUNCTIONALITY OF PRODUCT HANDLES
		setTimeout(function() {
			$('.product-handle-right').click(function() {
				product -= 100;
			});
		});
	});
}
