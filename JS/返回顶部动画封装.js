function animation(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {

			// var step = Math.ceil((target - obj.offsetLeft) / 10);
			var step = (target - window.pageYOffset) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (window.pageYOffset == target) {
				clearInterval(obj.timer);
				// 回调函数写到定时器结束里面;
				/* if(callback){
				    callback();
				} */
				callback && callback();
			}
			// obj.style.top = window.pageYOffset + step + 'px';
			window.scroll(0, window.pageYOffset + step)
		}, 15)
	}
