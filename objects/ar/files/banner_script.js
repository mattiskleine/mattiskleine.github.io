var startPos;

function slide() {
	startPos = event.clientX;
	window.addEventListener('mousemove', handleSlider);
	window.addEventListener('mouseup', stopSlider);
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
	document.getElementById('banner_container').style.setProperty('--sliderWidth', perc + "%");
	document.getElementById('banner_container').style.cursor = 'col-resize';
}

function stopSlider() {
	window.removeEventListener('mousemove', handleSlider);
	window.removeEventListener('mouseup', stopSlider);
	document.getElementById('banner_container').style.cursor = 'default';
}
