# Core functionality of Funda Roaming

De core functionaliteiten van de Funda Roaming app bestaan uit de volgende features:

 - Men kan huizen op een locatie die wordt vastgesteld met geolocation opzoeken
 
## Fallback voor GeoLocation

Er zijn een aantal oplossingen voor een persoon die zijn/haar geolocation heeft uitstaan, geblokkeerd heeft, of niet beschikt over een functie:

### Oplossing 1: Manual postcode input

```javascript
// cmdgeo.js

function updatePosition() {
    return geo_position_js.getCurrentPosition(gotPosition, 
    function (c,m) { fail(["geo.js", c, m].join(' ')); }, 
    {enableHighAccuracy:true});
}
```

Deze code roept de locatievoorziening van de library geo.js aan, als we deze bekijken krijgen we deze foutmelding opties:

```javascript
// geo.js
onFailure: function(h) {
    if (h.errorCode == 1) {
        e({
            code: 3,
            message: "Timeout"
        })
    } else {
        if (h.errorCode == 2) {
            e({
                code: 2,
                message: "Position Unavailable"
            })
        } else {
            e({
                code: 0,
                message: "Unknown Error: webOS-code" + errorCode
            })
        }
    }
}
```

Voor de fallback is het niet interessant om te weten welke foutmelding er wordt gegenereerd, alleen dat er een foutmelding is zou afdoende moeten zijn. De meest voor de hand liggende oplossing is dan de gebruiker vragen om de locatie naar keuze, in dit geval is het beste om deze naar een postcode te vragen. Dus zodra er een foutmelding wordt gevonden moet de volgende pop up verschijnen:

```html
<!-- index.html -->
<h2>Hallo gebruiker!</h2>
<p>Het ziet er naar uit dat jouw browser geen geolocatie ondersteund, of dat jij dit niet accepteert, 
je kunt echter nogsteeds gebruik maken van Funda Roaming, 
voer de postcode waar jij op dit moment bevindt in zodat wij huizen in de buurt kunnen zoeken!</p>
<label>Postcode</label>
<input id="postcode" type="text" maxlength="6" placeholder="0000AA"></input>
```

```javascript
// global.js

var input = document.getElementById('postcode').value;

var promise = new Promise(function(resolve, reject) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/' + input + 'e2d60e885b8742d4b0648300e3703bd7/koop/', true);
	xhr.onload = resolve;
	xhr.onerror = reject;
	xhr.send();
}).then(function(e) {
	if(e.target.response) {
		var data = util.parse(e.target.response);
		self.createHtmlReference(data);
	}
	else {
		console.log('nothing found')
	}
})
```

### Oplossing 2: Manual lat / long input

Deze oplossing is minder eenvoudig te implementeren voor de gebruiker, want deze is vaak niet op de hoogte van zijn / haar eigen latitude en longitude. Echter kan hij/zij wel deze gegevens opzoeken en zelf invoeren, de code die hierbij hoort ziet er als volgt uit:

```html
<h2>Hallo gebruiker!</h2>
<p>Het ziet er naar uit dat jouw browser geen geolocatie ondersteund, of dat jij dit niet accepteert, 
je kunt echter nogsteeds gebruik maken van Funda Roaming, 
voer de latitude en longitude waar jij op dit moment bevindt in zodat wij huizen in de buurt kunnen zoeken!</p>
<label>Latitude:</label>
<input id="lat-input" type="text" maxlength="15"></input>
<label>Longitude:</label>
<input id="lang-input" type="text" maxlength="15"></input>
```

```javascript
// Deze functie wordt dan:
function updatePosition() {
    return geo_position_js.getCurrentPosition(gotPosition, function (c,m) { fail(["geo.js", c, m].join(' ')); }, {enableHighAccuracy:true});
}
function updatePosition() {

	var latinput = document.getElementById('lat-input').value
	var longinput = document.getElementById('long-input').value

	var coords = {
		lat: latinput
		long: longinput
	}

	return coords;
}
```