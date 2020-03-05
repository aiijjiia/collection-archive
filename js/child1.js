var slide = document.getElementById("slide");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
var slide6 = document.getElementById("slide6");
var slide7 = document.getElementById("slide7");
var slide8 = document.getElementById("slide8");
var slide9 = document.getElementById("slide9");
var slide10 = document.getElementById("slide10");
var slide11 = document.getElementById("slide11");
slide2.innerHTML = slide1.innerHTML;
slide5.innerHTML = slide4.innerHTML;
slide8.innerHTML = slide7.innerHTML;
slide11.innerHTML = slide10.innerHTML;

function Marquee() {
	if (slide2.offsetTop - slide.scrollTop <= 0) {
		slide.scrollTop -= slide1.offsetHeight;
	} else {
		slide.scrollTop++;
	}
}

function Marquee2() {
	if (slide3.scrollTop == 0) {
		slide3.scrollTop += slide4.offsetHeight;
	} else {
		slide3.scrollTop--;
	}

}

function Marquee3() {
	if (slide8.offsetTop - slide6.scrollTop <= 0) {
		slide6.scrollTop -= slide7.offsetHeight;
	} else {
		slide6.scrollTop++;
	}
}

function Marquee4() {
	if (slide9.scrollTop == 0) {
		slide9.scrollTop += slide10.offsetHeight;
	} else {
		slide9.scrollTop--;
	}
}
var t = document.getElementsByClassName('pop');
var t1 = document.getElementsByClassName('floor');
var t2 = document.getElementById('pop_img');
var t3 = document.getElementsByClassName('p2');
var floor = ['01', '01', '02', '02', '03', '03', '04', '04', '05', '05', '06', '07', '07', '08', '08', '04', '08', '06',
	'03', '05', '02', '01', '02', '03', '05', '05', '04', '03', '02', '01'
];

function init1() {
	var res = document.getElementsByClassName('bg');
	for (var i = 0; i < res.length; i++) {
		res[i].index = i;
	}
	console.log(res.length)
	for (var i = 0; i < res.length; i++) {
		res[i].addEventListener('mouseover', function() {
			let im = getComputedStyle(this).backgroundImage;
			t1[0].style.display = "block";
			t2.src = im.substring(5, im.length - 5) + 'jpg';
			t[0].style.width = "500px";
			t3[0].innerText = floor[parseInt(this.index / 2)];

		})
		res[i].addEventListener('mouseout', function() {
			t1[0].style.display = "none";
			t[0].style.width = "0px";
		})
	}
}
init1();

var s1 = setInterval(Marquee, 10);
var s2 = setInterval(Marquee2, 10);
var s3 = setInterval(Marquee3, 30);
var s4 = setInterval(Marquee4, 50);
slide.onmouseover = function() {
	clearInterval(s1)
};
slide.onmouseout = function() {
	s1 = setInterval(Marquee, 1);
};
slide3.onmouseover = function() {
	clearInterval(s2)
};
slide3.onmouseout = function() {
	s2 = setInterval(Marquee2, 10);
};
slide6.onmouseover = function() {
	clearInterval(s3)
};
slide6.onmouseout = function() {
	s3 = setInterval(Marquee3, 30);
};
slide9.onmouseover = function() {
	clearInterval(s4)
};
slide9.onmouseout = function() {
	s4 = setInterval(Marquee4, 50);
};
