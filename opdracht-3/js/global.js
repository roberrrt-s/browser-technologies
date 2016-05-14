var d = (function(){

	var init = function() {

		var alpha = document.getElementsByClassName('alpha');

		for(var i = 0; i < alpha.length; i++) {
			alpha[i].addEventListener('dragstart', start, false);
			alpha[i].addEventListener('dragenter', enter, false);
			alpha[i].addEventListener('dragover', over, false);
			alpha[i].addEventListener('dragleave', leave, false);
			alpha[i].addEventListener('drop', drop, false);
			alpha[i].addEventListener('dragend', end, false);
		}
	};

	var start = function(e) {
		console.log(start)
		drag.src = this;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', this.innerHTML);
	};

	var enter = function(e) {
		console.log('enter');
	};

	var over = function(e) {
		console.log(over);
		if (e.preventDefault) {
			e.preventDefault();
		}

		this.classList.add('over');

		e.dataTransfer.dropEffect = 'move';

		return false;
	};

	var drop = function(e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		}

	  this.classList.remove('over');

		if (drag.src != this) {
			var parent = drag.src.parentNode

			this.parentNode.insertBefore(drag.src, this)
			parent.appendChild(this)

		}

		return false;
	};

	var leave = function(e) {
	  this.classList.remove('over');
	};

	var end = function(e) {
		console.log('end');
	};

	return {
		init: init,
		start: start,
		enter: enter,
		over: over,
		drop: drop,
		leave: leave
	}

}());

var c = (function(){

	var init = function() {

		var alpha = document.getElementsByClassName('alpha');

		for(var i = 0; i < alpha.length; i++) {
			alpha[i].addEventListener('click', element, false);
		}
	};


	var element = function(e) {

		var get = document.getElementById('get');
		var options = document.getElementById('options');

		if(e.target.parentNode.parentNode === get) {
			var clone = e.target.parentNode.cloneNode(true);
			get.removeChild(e.target.parentNode);
			options.appendChild(clone);
			clone.lastElementChild.addEventListener('click', element, false);
		}
		else if(e.target.parentNode.parentNode === options) {
			var clone = e.target.parentNode.cloneNode(true);
			options.removeChild(e.target.parentNode);
			get.appendChild(clone);
			clone.lastElementChild.addEventListener('click', element, false);			
		}
		else {
			console.log("Something went wrong! (incorrect container provided)")
		}


	};

	return {
		init: init,
		element: element
	}

}())

d.init();
c.init();