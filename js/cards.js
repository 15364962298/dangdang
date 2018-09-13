window.onload = function() {
	var e, i = 0;
	while (e = document.getElementById('tab_head').getElementsByTagName ('li') [i++]) {
		//获取标题
		if (e.className == 'on' || e.className == 'off') {
		e.onclick = function () {
			var getEls1 = document.querySelectorAll(".content>div");
			var getEls2 = document.querySelectorAll("#tab_head>li");			
				for (var z=0; z<getEls1.length; z++) {
				getEls1[z].className='hide';
				getEls2[z].className='off';
				}
			this.className = 'on';
			var target = this.getAttribute('title');
			document.getElementById(target).className = "show";
			}
		}
	}
}