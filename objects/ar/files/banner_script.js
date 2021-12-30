function slide() {
	window.addEventListener('mousemove', handleSlider);
	window.addEventListener('mouseup', stopSlider);
	document.getElementById('slider').style.animation = 'sliderInteraction 5s 0';
	document.getElementById('slider_img').style.animation = 'sliderInteractionImg 5s 0';
}

function slideTouch() {
	window.addEventListener('touchmove', handleSliderTouch);
	window.addEventListener('touchend', stopSliderTouch);
	document.getElementById('slider').style.animation = 'sliderInteraction 5s 0';
	document.getElementById('slider_img').style.animation = 'sliderInteractionImg 5s 0';
}

function handleSlider() {
	var bannerCon = document.getElementById('banner_container');
	var slider = document.getElementById('slider').offsetWidth;
	var sliderVW = 100 / bannerCon.offsetWidth * slider;
	var perc = ((event.clientX - bannerCon.offsetLeft - slider) / bannerCon.offsetWidth) * 100;
	if (perc < 22.7) {
		perc = 22.7;
	} else if (perc > 94.8){
		perc = 94.8;
	}
	document.getElementById('slider').style.left = perc + '%';
	document.getElementById('slider_img').style.width = perc + '%';
	document.getElementById('banner_container').style.cursor = 'col-resize';
}

function handleSliderTouch() {
	event.preventDefault();
	var bannerCon = document.getElementById('banner_container');
	var slider = document.getElementById('slider').offsetWidth;
	var sliderVW = 100 / bannerCon.offsetWidth * slider;
	var perc = ((event.touches[0].clientX - bannerCon.offsetLeft - slider) / bannerCon.offsetWidth) * 100;
	if (perc < 22.7) {
		perc = 22.7;
	} else if (perc > 94.8){
		perc = 94.8;
	}
	document.getElementById('slider').style.left = perc + '%';
	document.getElementById('slider_img').style.width = perc + '%';
	document.getElementById('banner_container').style.cursor = 'col-resize';
}

function stopSlider() {
	window.removeEventListener('mousemove', handleSlider);
	window.removeEventListener('mouseup', stopSlider);
	document.getElementById('banner_container').style.cursor = 'default';
}

function stopSliderTouch() {
	window.removeEventListener('touchmove', handleSliderTouch);
	window.removeEventListener('touchend', stopSliderTouch);
	document.getElementById('banner_container').style.cursor = 'default';
}
