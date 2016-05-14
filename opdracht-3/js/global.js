var d = (function(){

	var init = function() {

		var alpha = document.getElementsByClassName('alpha');

		for(var i = 0; i < alpha.length; i++) {
			alpha[i].addEventListener('dragstart', start, !1);
			alpha[i].addEventListener('dragenter', enter, !1);
			alpha[i].addEventListener('dragover', over, !1);
			alpha[i].addEventListener('dragleave', leave, !1);
			alpha[i].addEventListener('drop', drop, !1);
			alpha[i].addEventListener('dragend', end, !1);
		}
	};

	var start = function(e) {
		console.log('start')

		var get = document.getElementById('get');
		var options = document.getElementById('options');

		if(e.srcElement.parentNode.parentNode === get) {
			options.parentNode.className = "content over";
			console.log('added over to options')
		}
		else if(e.srcElement.parentNode.parentNode === options) {
			get.parentNode.className = "content over";
			console.log('added over to get')
		}
		else {
			console.log('Something went wrong (unknown element origin)');
		}

		console.log(e.srcElement.parentNode.parentNode)
	};

	var enter = function(e) {
		console.log('enter');
	};

	var over = function(e) {
		console.log('over');
	};

	var drop = function(e) {
		console.log('drop')
	};

	var leave = function(e) {
		console.log('leave')
	};

	var end = function(e) {
		console.log('end');

		if(e.srcElement.parentNode.parentNode === get) {
			options.parentNode.className = "content";
			console.log('removed over to options')
		}
		else if(e.srcElement.parentNode.parentNode === options) {
			get.parentNode.className = "content";
			console.log('removed over to get')
		}
		else {
			console.log('Something went wrong (unknown element origin)');
		}

		console.log(e.srcElement.parentNode.parentNode)
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
			alpha[i].addEventListener('click', element, !1);
		}

	};

	var element = function(e) {

		var get = document.getElementById('get');
		var options = document.getElementById('options');
		var div = e.target;

		while(div.nodeName !== "DIV") {
			div = div.parentNode;
		}

		console.log(div)

		if(div.parentNode.parentNode === get) {
			var clone = div.parentNode.cloneNode(!0);
			get.removeChild(div.parentNode);
			options.appendChild(clone);
			clone.lastElementChild.addEventListener('click', element, !1);
			clone.lastElementChild.addEventListener('dragstart', d.start, !1);
			clone.lastElementChild.addEventListener('dragenter', d.enter, !1);
			clone.lastElementChild.addEventListener('dragover', d.over, !1);
			clone.lastElementChild.addEventListener('dragleave', d.leave, !1);
			clone.lastElementChild.addEventListener('drop', d.drop, !1);
			clone.lastElementChild.addEventListener('dragend', d.end, !1);
		}
		else if(div.parentNode.parentNode === options) {
			var clone = div.parentNode.cloneNode(!0);
			options.removeChild(div.parentNode);
			get.appendChild(clone);
			clone.lastElementChild.addEventListener('click', element, !1);
			clone.lastElementChild.addEventListener('dragstart', d.start, !1);
			clone.lastElementChild.addEventListener('dragenter', d.enter, !1);
			clone.lastElementChild.addEventListener('dragover', d.over, !1);
			clone.lastElementChild.addEventListener('dragleave', d.leave, !1);
			clone.lastElementChild.addEventListener('drop', d.drop, !1);
			clone.lastElementChild.addEventListener('dragend', d.end, !1);
		}
		else {
		}

	};

	return {
		init: init,
		element: element
	}

}())

d.init();
c.init();