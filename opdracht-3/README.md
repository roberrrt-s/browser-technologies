# Eindopdracht voor browser technologies

http://robertspier.nl/hva/bt/

### User case
Ik wil dat gebruikers een lijst kunnen samenstellen van ingedienten die zij kunnen gebruiken om tosti's te maken.

De gebruiker krijgt een selectie keuzes waaruit zij kunnen kiezen om zo de ingedienten te halen voor de ultieme tosti naar keuze.

### States

###### Basic state

Mijn basic state is gebaseerd op een post systeem, waarin de HTML 1 input field zou zijn. Op het drukken van de submit button wordt een post request verstuurd naar de server waardoor deze server side alle elementen gaat verplaatsen. Omdat mijn kennis van PHP / Node niet op kan tegen mijn kennis van vanillajs heb ik besloten dit effect na te bootsen in een apart .js bestand, basic.js:

```javascript
(function() {
	var basic = {

		init: function() {
			var button = document.getElementById('submit');
			button.addEventListener('click', function() {
				basic.order();
			})
		},

		order: function() {
			var checked = document.querySelectorAll('input:checked');
			var unchecked = document.querySelectorAll('input:not(:checked)');
			var get = document.getElementById('get');
			var options = document.getElementById('options')

			for(var i = 0; i < checked.length; i++) {
				var el = checked[i].parentNode.parentNode.parentNode;

				if(el.parentNode !== document.getElementById('get')) {
					var clone = el.cloneNode(true);
					options.removeChild(el);
					get.appendChild(clone);
				}
			}

			for(var i = 0; i < unchecked.length; i++) {
				var el = unchecked[i].parentNode.parentNode.parentNode;

				if(el.parentNode !== document.getElementById('options')) {
					var clone = el.cloneNode(true);
					get.removeChild(el);
					options.appendChild(clone);
				}
			}

			e.init();
			
		}

	}

	basic.init();

}())
```

Dit systeem zou (mits serverside) op vrijwel alle browsers, inclusief degene zonder javascript, moeten werken. 

###### Enhanced state

In de enhanced state wil ik dat gebruikers op elementen kunnen klikken om deze toe te voegen aan de lijst, dit versneld het hele proces, hiervoor heb ik gekozen om dit met javascript te doen. Alle opties krijgen een set eventlisteners op hun 'click' zodat ik deze kan afvangen.

Om ervoor te zorgen dat dit ook werkt in oudere browsers controleer ik of de addEventListener functie beschikbaar is, anders val ik terug op de attachEvent functie.

```javascript
var init = function() {

	var el = document.getElementsByClassName('alpha');

	if(document.addEventListener){

		var get = document.getElementById('get');
		var options = document.getElementById('options');
		get.addEventListener('drop', d.drop, !1);
		get.addEventListener('dragover', d.over, !1);

		options.addEventListener('drop', d.drop, !1);
		options.addEventListener('dragover', d.over, !1);

		for(var i = 0; i < el.length; i++) {
			el[i].addEventListener('click', c.element, !1);
			el[i].addEventListener('dragstart', d.start, !1);
			el[i].addEventListener('dragenter', d.enter, !1);
			el[i].addEventListener('dragleave', d.leave, !1);
			el[i].addEventListener('dragend', d.end, !1);
		}
	}

	else if(document.attachEvent) {
		for(var i = 0; i < el.length; i++) {
			el[i].attachEvent('click', c.element);
			el[i].attachEvent('dragstart', d.start);
			el[i].attachEvent('dragenter', d.enter);
			el[i].attachEvent('dragleave', d.leave);
			el[i].attachEvent('dragend', d.end);
		}
	}
};
```

![alt tag](https://i.gyazo.com/7f5f65c680c95aa60dcb77770c335a52.png)

Zodra er een click plaatsvind controleer ik of het ingedient in de opties of meenemen lijst staat, op basis hiervan versleep ik deze naar de andere container.

```javascript
var element = function(e) {

	var get = document.getElementById('get');
	var options = document.getElementById('options');
	var div = e.target;

	while(div.nodeName !== "DIV") {
		div = div.parentNode;
	}

	if(div.parentNode.parentNode === get) {
		var clone = div.parentNode.cloneNode(!0);
		get.removeChild(div.parentNode);
		options.appendChild(clone);
		ev.addEvents(clone.lastElementChild);
	}
	else if(div.parentNode.parentNode === options) {
		var clone = div.parentNode.cloneNode(!0);
		options.removeChild(div.parentNode);
		get.appendChild(clone);
		ev.addEvents(clone.lastElementChild);
	}
	else {
	}

};
```

![alt tag](https://i.gyazo.com/8c93274b1c1682adf9e2f3b77b343443.png)
![alt tag](https://i.gyazo.com/1c2f2f0431ddd804d831796f6bceb8c6.png)
![alt tag](https://i.gyazo.com/f530b4ad103ae73378d06d9e809692c3.png)


Normaal zou ik hier gebruik maken van de `querySelector` om de betreffende nodes te selecteren, en `classList` om de klasse aan te passen, maar omdat querySelecter en classList niet ondersteund worden in IE6/7 ben ik in al mijn HTML manipulatie terug gevallen op het gebruik van DOM core 2 level properties.

###### Bonus state

Als moderne API heb ik de 'drag en drop' API onderzocht, deze is ondersteund in de meeste browsers, maar er missen enkele functionaliteiten binnen het overzetten van data, om deze toch te ondersteunen gebruik ik deze niet, maar sla ik mijn source data op in een globale variabele. Alle mobiele browsers hebben geen ondersteuning voor drag en drop, wat helaas logisch is.

![alt tag](https://i.gyazo.com/8beea4d6b20f8befc85ef13c4c4855e7.png)

Ik vang tijdens het drag en drop alle bijkomende events op, respectievelijk: start, enter, leave, end, drop en over. Voor enkele is het verplicht dat ik de standaard browseractie onderdruk via een `e.preventDefault`

Drag starting event:

```javascript
var start = function(e) {
	console.log('start')

	dragSrc = e.target;

	var get = document.getElementById('get');
	var options = document.getElementById('options');

	if(dragSrc === get) {
		options.parentNode.className = "content over";
		console.log('added over to options')
	}
	else if(dragSrc === options) {
		get.parentNode.className = "content over";
		console.log('added over to get')
	}
	else {
		console.log('Something went wrong (unknown element origin)');
	}
};
```

Drag dropping event:

```javascript
var drop = function(e) {
		e.preventDefault();
	console.log('drop');

	var get = document.getElementById('get');
	var options = document.getElementById('options');

	console.log(e.target)

	console.log(dragSrc.parentNode)

	if(e.target === get && dragSrc.parentNode.parentNode === options) {

		var clone = dragSrc.parentNode.cloneNode(!0);
		options.removeChild(dragSrc.parentNode);
		get.appendChild(clone);
		ev.addEvents(clone.lastElementChild);

	}
	else if(e.target === options && dragSrc.parentNode.parentNode === get) {

		var clone = dragSrc.parentNode.cloneNode(!0);
		get.removeChild(dragSrc.parentNode);
		options.appendChild(clone);
		ev.addEvents(clone.lastElementChild);

	}
	else {
		console.log('Something went wrong! (faulty target)')
	}

	dragSrc = null;

};
```