window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	const menu_link = document.querySelector('#menu-link');
	const left_content = document.querySelector('.left-content');

	menu_link.addEventListener('mouseover', function () {
		var alt_images = new Array("images/alt-image-1.jpg", "images/alt-image-2.jpg", "images/alt-image-3.jpg", "images/alt-image-4.jpg", "images/mobile-home.jpg");
		//add alt-image class
		left_content.classList.add('alt-image');
		//set randomizer for image array
		var random = alt_images[ Math.floor((Math.random() * alt_images.length)) ];
		//insert image into DOM
		document.querySelector('.alt-image').style.backgroundImage = `url(${random})`;
		document.querySelector('.alt-image').style.backgroundRepeat = "no-repeat";
		document.querySelector('.alt-image').style.backgroundSize = "cover";
		
	})
}





 
