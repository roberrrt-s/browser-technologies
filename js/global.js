(function() {
	var check = {
		init: function() {

			var iOS = !!navigator.userAgent.match('iPhone OS') || !!navigator.userAgent.match('iPad');

			if (this.modernizr && !iOS) {
			    drag.init()
			} else if (this.modernizr && iOS) {
			    drag.init()
			} else {
			    click.init()
			}
		},

		modernizr: function() {
		    var div = document.createElement('div');
		    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
		}

	}

	var drag = {

		init: function() {
			var self = this;
			var alpha = document.querySelectorAll('.alpha');

			if(alpha < 1) {
				var alpha = document.getElementsByClassName('alpha');
			}


			[].forEach.call(alpha, function(el) {
				el.addEventListener('dragstart', self.start, false);
				el.addEventListener('dragenter', self.enter, false);
				el.addEventListener('dragover', self.over, false);
				el.addEventListener('dragleave', self.leave, false);
				el.addEventListener('drop', self.drop, false);
				el.addEventListener('dragend', self.end, false);
			});

		},



		start: function(e) {
			drag.src = this;
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text/html', this.innerHTML);
		},

		over: function(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}

			this.classList.add('over');

			e.dataTransfer.dropEffect = 'move';

			return false;
		},

		drop: function(e) {
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
		},

		leave: function(e) {
		  this.classList.remove('over');
		},

		src: null

	};

	var click = {

		init: function() {
			var self = this;
			var alpha = document.querySelectorAll('.alpha');

			if(alpha < 1) {
				var alpha = document.getElementsByClassName('alpha');
			}

			[].forEach.call(alpha, function(el) {
				el.addEventListener('click', self.element, false);
			});
		},

		element: function(e) {
			if(click.src) {

				console.log(click.src)

				var parent = click.src.parentNode

				e.target.parentNode.insertBefore(click.src, e.target)
				parent.appendChild(e.target)

				click.src = null;

			}
			else {
				if(e.target.getAttribute('draggable') == "true") {
					console.log("good one")
					click.src = e.target
				}
				console.log(click.src)
			}

		},

		src: null
	}

	check.init();

}())