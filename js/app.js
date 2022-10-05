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

	const nav_item = document.querySelectorAll('.nav-item, .nav-link')

	// const menu_link = document.querySelector('#menu-link');
	const left_content = document.querySelector('.left-content');
	const right_content = document.querySelector('.right-content ');

	nav_item.forEach(item => item.addEventListener('mouseenter', function () {
		var alt_images = new Array("images/alt-image-1.jpg",  "images/alt-image-4.jpg", "images/alt-img-1.jpg", "images/alt-img-2.jpg", "images/alt-img-3.jpg");
		//add alt-image class
		left_content.classList.add('alt-image');
		//change right-content
		right_content.classList.add('content-hover');
		// document.querySelector('.right-content').style.backgroundColor = 'brown';
		document.querySelector('.right-content').style.backgroundImage = '';
		document.querySelector('section.right-content').setAttribute('id', 'right-text');
		//set randomizer for image array
		var random = alt_images[ Math.floor((Math.random() * alt_images.length)) ];
		//insert image into DOM
		document.querySelector('.alt-image').style.backgroundImage = `url(${random})`;
		document.querySelector('.alt-image').style.backgroundRepeat = "no-repeat";
		document.querySelector('.alt-image').style.backgroundSize = "cover";
		
	}))
	
	nav_item.forEach(item => item.addEventListener('mouseout', function () {
		left_content.classList.remove('alt-image');
		document.querySelector('.left-content').style.backgroundImage = '';
		right_content.classList.remove('content-hover');
		document.querySelector('section.right-content').setAttribute('id', '');
	}))

	// document.getElementById('menu-link').addEventListener('click', loadDoc);

	// function loadDoc() {
	// 	var xhr = new XMLHttpRequest();
		
	// 	xhr.open('GET', 'menu.html', true);
		
	// 	xhr.onload = function () {
	// 		if (this.status == 200) {
	// 			console.log(this.responseText);
	// 			document.querySelector('div.right-content').innerHTML = this.responseText;
	// 		}else if(this.status == 404) {
	// 			document.querySelector('div.right-content').innerHTML = 'Not Found';
	// 		} 
	// 	}
		
	// 	xhr.onerror = function() {
	// 		console.log('Request error...');
	// 	}
		
	// 	xhr.send();
	//   }
	

}




 
