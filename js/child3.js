var left = document.getElementById('left');
var pic = document.getElementById('middle');

function change() {
	let s = window.getComputedStyle(left).marginLeft;
	let s1 = window.getComputedStyle(pic).marginLeft;
	// let len=parseInt(s.substring(0,s.length-2))-1;
	let len1 = parseInt(s1.substring(0, s1.length - 2)) - 1;
	// left.style.marginLeft=len.toString()+"px";
	pic.style.marginLeft = len1.toString() + "px";
}
setTimeout(function c1() {
	r = setInterval(change, 10);
}, 4000);
setTimeout(c2, 4500);

var res = document.getElementsByClassName('box_s');

function c2() {
	for (var i = 0; i < res.length; i++) {
		res[i].addEventListener('mouseenter', function() {
			clearInterval(r);
		})
		res[i].addEventListener('mouseout', function() {
			r = setInterval(change, 10)
		})
	}
}
