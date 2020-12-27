$(document).ready(function () {
	$('#contactForm')[0].reset();
});

/*------------------------------------------------------------------------------------*/
/*----------- CODE FOR REVEALING AND CONCEALING MOBILE MENU --------------------------*/
/*------------------------------------------------------------------------------------*/

var mobileNavOpenBtn = document.getElementById('mobileNavOpenBtn');

mobileNavOpenBtn.addEventListener('click', toggleMobileNavVisibility);

function toggleMobileNavVisibility() {
	var mobileNavigation = document.getElementById('mobileNavigationWrapper');
	if (mobileNavigation.style.display === 'none') {
		mobileNavigation.style.display = 'block';
	} else {
		mobileNavigation.style.display = 'none';
	}
}

/*------------------------------------------------------------------------------------*/
/*----------- CODE FOR REVEALING AND CONCEALING MOBILE MENU --------------------------*/
/*------------------------------------------------------------------------------------*/



