(function() {

	var drag = {

		init: function() {

			var self = this;
			var alpha = document.getElementsByClassName('alpha');

			console.log(alpha)

			for(var i = 0; i < alpha.length; i++) {
				alpha[i].addEventListener('dragstart', self.start, false);
				alpha[i].addEventListener('dragenter', self.enter, false);
				alpha[i].addEventListener('dragover', self.over, false);
				alpha[i].addEventListener('dragleave', self.leave, false);
				alpha[i].addEventListener('drop', self.drop, false);
				alpha[i].addEventListener('dragend', self.end, false);
			}
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
			var alpha = document.getElementsByClassName('alpha');

			for(var i = 0; i < alpha.length; i++) {
				alpha[i].addEventListener('click', self.element, false);
			}
		},


		element: function(e) {

			if(click.src) {

				var parent = click.src.parentNode

				e.target.parentNode.insertBefore(click.src, e.target)
				parent.appendChild(e.target)

				click.src = null;

			}
			else {
				if(e.target.getAttribute('draggable') == "true") {
					click.src = e.target
				}
			}

		},

		src: null
	}

	var basic = {

		init: function() {

		}

	}

	drag.init();
	click.init();

}())