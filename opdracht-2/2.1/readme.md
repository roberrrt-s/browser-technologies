# Feature detection fallback opdracht:

## Template Strings (ES6)

Vooroorlogse browsers hebben de nare eigenschap ECMAScript 2015 niet te ondersteunen, een van de nieuwe features hierin zijn zogenaamde 'template strings'

```javascript
var string = `Hallo wereld, mijn naam is ${user.name}!`;

var user = {name: "Robert"};

console.log(string);
```

Geeft als resultaat:

`Hallo wereld, mijn naam is Robert!`

Echter, in browsers die dit niet ondersteunen geeft dit:

`Uncaught SyntaxError: Illegal token`

Als fallback hiervoor kun je de volgende functie gebruiken:


```javascript
var string = function(name) {
	return "Hallo wereld, mijn naam is " + name + "!";
}

console.log(string("Robert"))
```

## Color input type

IE, Edge en (mobile) Safari ondersteunen het color input type niet, deze wordt automatisch omgezet naar een text input.
Om dit op te vangen kun je op twee manieren werken:


### Oplossing 1.
```html
<input id="input" type="text" placeholder="Your color of choice"></input>

<script>
	var color = document.getElementById('input').value
	body.style.backgroundColor = color;
</script>
```

### Oplossing 2.
```html
<input id="input" type="color" placeholder="Your color of choice"></input>
<select id="select">
	<option value="#F00">Red</option>
	<option value="#0F0">Green</option>
	<option value="#00F">Blue</option>
	<option value="#000">Black</option>
</select>

<script>

    var select = document.getElementById('select');
    var input = document.getElementById('input');
    var check = input.type;

function submit() {

    if(check !== 'color') {
        input.parentNode.removeChild(input);
        var color = select.value;
    }
    else {
        select.parentNode.removeChild(select);
        var color = input.value;
    }

    body.style.backgroundColor = color;

}

</script>
```

Hiermee kun je eenvoudig een selectie aan kleuren opvangen