var doc = document.getElementById('box_con');
var font=['GillSans-Bold','futura_medium','avenir_book','didot','baskerville'];
var font_index=0;
let ht = "";
for (var i = 0; i < 3500; i++) {
	if (i % 150 == 0) {
		ht += '<div class="box2"><div class="line">';
	}
	if (i % 150 == 0) {
		if (i / 150 % 2 == 0) {
			ht += '<div class="box box1"></div>';
		} else {
			ht += '<div class="box box3"></div>';
		}
	} else {
		ht += '<div class="box"></div>';
	}
	if (i % 150 == 149) {
		ht += '</div></div>';
	}
}
doc.innerHTML = ht;
var res = document.getElementsByClassName('box');
for (var i = 0; i < res.length; i++) {
	res[i].onclick = change;
}

function change() {
	this.style.background = "transparent";
	this.style.border = "2px solid transparent";
}
var f=document.getElementsByClassName('top_right');
function change_text(){
	console.log(1);
	font_index++;
	if(font_index==5){
		font_index=0;
	}
	f[0].style.fontFamily=font[font_index];
}
var fo=setInterval(change_text,100);
