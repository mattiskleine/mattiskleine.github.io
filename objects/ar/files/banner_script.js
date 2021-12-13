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
	if (perc < 0) {
		perc = 0;
	} else if (perc > 100 - sliderVW){
		perc = 100 - sliderVW;
	}
	document.getElementById('banner_container').style.setProperty('--sliderWidth', perc + "%");
}

function stopSlider() {
	window.removeEventListener('mousemove', handleSlider);
	window.removeEventListener('mouseup', stopSlider);
}
