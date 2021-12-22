var state = "start";
var swipe = 0;
var toggleState = 0;
document.addEventListener("load", setStateStart());

function setStateStart() {
	state = "start";
	setTimeout(() => {
		document.getElementById("head_unit").style.top = "42%";
		document.getElementById("head_unit").style.left = "52%";
		document.getElementById("head_unit").style.width = "calc(var(--width) / 3)";
		document.getElementById("head_unit").style.height = "calc(var(--width) / 3)";
		document.getElementById("seats").style.transform = "scale(0)";
		document.getElementById("left_arrow").style.display = "none";
		document.getElementById("right_arrow").style.display = "none";
		document.getElementById("part_name").style.display = "none";
		document.getElementById("button_details").style.display = "none";
		document.getElementById("button_buy").style.display = "none";
		document.getElementById("ar_background").style.opacity = "0";
		document.getElementById("modern_big").style.opacity = "0";
		document.getElementById("modern_small").style.opacity = "0";
		document.getElementById("old_big").style.opacity = "0";
		document.getElementById("old_small").style.opacity = "0";
		document.getElementById("left_arrow").style.opacity = "0";
		document.getElementById("right_arrow").style.opacity = "0";
		document.getElementById("part_name").style.opacity = "0";
		document.getElementById("button_details").style.opacity = "0";
		document.getElementById("button_buy").style.opacity = "0";
		document.getElementById("ar_menu").style.opacity = "0";
		document.getElementById("mask").style.display = "none";
		document.getElementById("instructions").style.opacity = "0";
		document.getElementById("toggle_switch").style.opacity = "0";
		document.getElementById("locked").style.opacity = "0";
		document.getElementById("released").style.opacity = "0";
	}, 50);
	setTimeout(() => {
		document.getElementById("ac").style.transform = "scale(0)";
	}, 100);
	setTimeout(() => {
		document.getElementById("armrest").style.transform = "scale(0)";
	}, 150);
	setTimeout(() => {
		document.getElementById("head_unit").style.transform = "scale(0)";
	}, 200);
	setTimeout(() => {
		document.getElementById("glove_compartment").style.transform = "scale(0)";
	}, 250);
	setTimeout(() => {
		document.getElementById("ar_bt_modify").style.transform = "scale(1)";
	}, 300);
	setTimeout(() => {
		document.getElementById("ar_bt_explore").style.transform = "scale(1)";
	}, 350);
	setTimeout(() => {
		document.getElementById("instructions").style.display = "none";
		document.getElementById("toggle_switch").style.display = "none";
		document.getElementById("locked").style.display = "none";
		document.getElementById("released").style.display = "none";
	}, 500);
}

function setStateBack() {
	if (state == "modify") {
		setStateStart();
	} else if (state == "explore") {
		setStateStart();
	} else if (state == "ARHeadUnit") {
		setStateExplore();
	} else if (state == "toggleHeadUnit") {
		setStateModify();
	}
}

function setStateExplore() {
	state = "explore";
	document.getElementById("ar_bt_explore").style.animation = "bounce 5s linear 2s 0";
	document.getElementById("head_unit").style.animation = "attention 2s 1s forwards infinite";

	document.getElementById("left_arrow").style.display = "none";
	document.getElementById("right_arrow").style.display = "none";
	document.getElementById("part_name").style.display = "none";
	document.getElementById("button_details").style.display = "none";
	document.getElementById("button_buy").style.display = "none";
	document.getElementById("ar_background").style.opacity = "0";
	document.getElementById("modern_big").style.opacity = "0";
	document.getElementById("modern_small").style.opacity = "0";
	document.getElementById("old_big").style.opacity = "0";
	document.getElementById("old_small").style.opacity = "0";
	document.getElementById("left_arrow").style.opacity = "0";
	document.getElementById("right_arrow").style.opacity = "0";
	document.getElementById("part_name").style.opacity = "0";
	document.getElementById("button_details").style.opacity = "0";
	document.getElementById("button_buy").style.opacity = "0";
	document.getElementById("ar_menu").style.opacity = "0";
	setTimeout(() => {
		document.getElementById("ar_bt_explore").style.transform = "scale(0)";
	}, 50);
	setTimeout(() => {
		document.getElementById("ar_bt_modify").style.transform = "scale(0)";
	}, 100);
	setTimeout(() => {
		document.getElementById("seats").style.transform = "scale(1)";
	}, 150);
	setTimeout(() => {
		document.getElementById("ac").style.transform = "scale(1)";
	}, 200);
	setTimeout(() => {
		document.getElementById("armrest").style.transform = "scale(1)";
	}, 250);
	setTimeout(() => {
		document.getElementById("head_unit").style.transform = "scale(1)";
	}, 300);
	setTimeout(() => {
		document.getElementById("glove_compartment").style.transform = "scale(1)";
	}, 350);
}

function setStateModify() {
	document.getElementById("ar_bt_explore").style.animation = "bounce 5s linear 2s 0";
	document.getElementById("head_unit").style.animation = "attention 2s 1s forwards infinite";
	
	document.getElementById("head_unit").style.top = "42%";
	document.getElementById("head_unit").style.left = "52%";
	document.getElementById("head_unit").style.width = "calc(var(--width) / 3)";
	document.getElementById("head_unit").style.height = "calc(var(--width) / 3)";
	document.getElementById("mask").style.display = "none";
	document.getElementById("instructions").style.opacity = "0";
	document.getElementById("toggle_switch").style.opacity = "0";
	document.getElementById("locked").style.opacity = "0";
	document.getElementById("released").style.opacity = "0";
	state = "modify";
	setTimeout(() => {
		document.getElementById("ar_bt_modify").style.transform = "scale(0)";
	}, 50);
	setTimeout(() => {
		document.getElementById("ar_bt_explore").style.transform = "scale(0)";
	}, 100);

	setTimeout(() => {
		document.getElementById("seats").style.transform = "scale(1)";
	}, 150);
	setTimeout(() => {
		document.getElementById("ac").style.transform = "scale(1)";
	}, 200);
	setTimeout(() => {
		document.getElementById("armrest").style.transform = "scale(1)";
	}, 250);
	setTimeout(() => {
		document.getElementById("head_unit").style.transform = "scale(1)";
	}, 300);
	setTimeout(() => {
		document.getElementById("glove_compartment").style.transform = "scale(1)";
	}, 350);
	setTimeout(() => {
		document.getElementById("instructions").style.display = "none";
		document.getElementById("toggle_switch").style.display = "none";
		document.getElementById("locked").style.display = "none";
		document.getElementById("released").style.display = "none";
	}, 500);
}

function setStateHeadUnit() {
	document.getElementById("head_unit").style.animation = "attention 2s forwards 1";
	if (state == "explore") {
		setStateARHeadUnit();
	} else if (state = "modify") {
		setStateToggleHeadUnit();
	}
	setTimeout(() => {
		document.getElementById("seats").style.transform = "scale(0)";
	}, 50);
	setTimeout(() => {
		document.getElementById("ac").style.transform = "scale(0)";
	}, 100);
	setTimeout(() => {
		document.getElementById("armrest").style.transform = "scale(0)";
	}, 150);
	setTimeout(() => {
		document.getElementById("glove_compartment").style.transform = "scale(0)";
	}, 200);
}

function setStateARHeadUnit() {
	state = "ARHeadUnit"
	document.getElementById("head_unit").style.transform = "scale(0)";
	setTimeout(() => {
		document.getElementById("left_arrow").style.display = "block";
		document.getElementById("right_arrow").style.display = "block";
		document.getElementById("part_name").style.display = "block";
		document.getElementById("button_details").style.display = "block";
		document.getElementById("button_buy").style.display = "block";
		document.getElementById("ar_background").style.opacity = "1";
		if (swipe == 0) {
			document.getElementById("modern_big").style.opacity = "1";
		} else if (swipe == 1) {
			document.getElementById("old_big").style.opacity = "1";
		}
		document.getElementById("modern_small").style.opacity = "1";
		document.getElementById("old_small").style.opacity = "1";
		document.getElementById("left_arrow").style.opacity = "1";
		document.getElementById("right_arrow").style.opacity = "1";
		document.getElementById("part_name").style.opacity = "1";
		document.getElementById("button_details").style.opacity = "1";
		document.getElementById("button_buy").style.opacity = "1";
		document.getElementById("ar_menu").style.opacity = ".8";
	}, 200);
}

function swipeLeft() {
	if (swipe == 0) {
		document.getElementById("modern_small").style.transform = "translateX(-110%) scaleX(0)";
		document.getElementById("modern_big").style.opacity = "0";
		document.getElementById("old_small").style.transition = "transform 0s";
		document.getElementById("old_small").style.transform = "translateX(110%) scaleX(0)";
		document.getElementById("old_big").style.opacity = "1";
		document.getElementById("part_name").innerHTML = "cupholder radio";
		setTimeout(() => {
			document.getElementById("old_small").style.transition = "transform .5s";
			document.getElementById("old_small").style.transform = "translateX(0%) scaleX(1)";
		}, 1);
		swipe = 1;
	} else if (swipe == 1) {
		document.getElementById("old_small").style.transform = "translateX(-110%) scaleX(0)";
		document.getElementById("old_big").style.opacity = "0";
		document.getElementById("modern_small").style.transition = "transform 0s";
		document.getElementById("modern_small").style.transform = "translateX(110%) scaleX(0)";
		setTimeout(() => {
			document.getElementById("modern_small").style.transition = "transform .5s";
			document.getElementById("modern_small").style.transform = "translateX(0%) scaleX(1)";
			document.getElementById("modern_big").style.opacity = "1";
			document.getElementById("part_name").innerHTML = "10.1'' touch screen";
		}, 1);
		swipe = 0;
	}
}

function swipeRight() {
	if (swipe == 1) {
		document.getElementById("modern_small").style.transition = "transform 0s";
		document.getElementById("modern_small").style.transform = "translateX(-110%) scaleX(0)";
		document.getElementById("old_small").style.transform = "translateX(110%) scaleX(0)";
		document.getElementById("old_big").style.opacity = "0";
		setTimeout(() => {
			document.getElementById("modern_small").style.transition = "transform .5s";
			document.getElementById("modern_small").style.transform = "translateX(0%) scaleX(1)";
			document.getElementById("modern_big").style.opacity = "1";
			document.getElementById("part_name").innerHTML = "10.1'' touch screen";
		}, 1);
		swipe = 0;
	} else if (swipe == 0) {
		document.getElementById("modern_small").style.transform = "translateX(110%) scaleX(0)";
		document.getElementById("modern_big").style.opacity = "0";
		document.getElementById("old_small").style.transition = "transform 0s";
		document.getElementById("old_small").style.transform = "translateX(-110%) scaleX(0)";
		document.getElementById("old_big").style.opacity = "1";
		document.getElementById("part_name").innerHTML = "cupholder radio";
		setTimeout(() => {
			document.getElementById("old_small").style.transition = "transform .5s";
			document.getElementById("old_small").style.transform = "translateX(0%) scaleX(1)";
		}, 1);
		swipe = 1;
	}
}

function setStateToggleHeadUnit() {
	state = "toggleHeadUnit"
	document.getElementById("mask").style.display = "block";
	document.getElementById("instructions").style.display = "block";
	document.getElementById("toggle_switch").style.display = "block";
	document.getElementById("locked").style.display = "block";
	document.getElementById("released").style.display = "block";
	document.getElementById("head_unit").style.animation = "attention 2s forwards 0";
	document.getElementById("head_unit").style.transform = "scale(1)";
	document.getElementById("head_unit").style.top = "18%";
	document.getElementById("head_unit").style.left = "12%";
	document.getElementById("head_unit").style.width = "calc(var(--width) / 1.36)";
	document.getElementById("head_unit").style.height = "calc(var(--width) / 5)";
	setTimeout(() => {
		document.getElementById("instructions").style.opacity = "1";
		document.getElementById("toggle_switch").style.opacity = "1";
		document.getElementById("locked").style.opacity = "1";
		document.getElementById("released").style.opacity = "1";
	}, 300);
}

function toggle() {
	if (toggleState == 0) {
		document.getElementById("toggle_switch").style.backgroundColor = "#aaaaaa";
		document.getElementById("toggler").style.transform = "translateY(130%)";
		document.getElementById("locked").style.color = "#bbbbbb";
		document.getElementById("released").style.color = "#444444";
		toggleState = 1;
	} else if (toggleState == 1) {
		document.getElementById("toggle_switch").style.backgroundColor = "#60b985";
		document.getElementById("toggler").style.transform = "translateY(0)";
		document.getElementById("locked").style.color = "#444444";
		document.getElementById("released").style.color = "#bbbbbb";
		toggleState = 0;
	}
}
