# grocery-fallback
Fallbacks:

## Drag and Drop

![alt tag](https://i.gyazo.com/ace7fc9b66500949aa9cdb6eadfb3549.png)

Voor browsers die dit niet ondersteunen heb ik een combinatie van een bestaand Modernizr script en een stackoverflow artikel samengevoegd
Mocht er geen drag & drop aanwezig zijn, dan is er fallback met behulp van een click en click systeem.

 - http://stackoverflow.com/questions/2856262/detecting-html5-drag-and-drop-support-in-javascript
 - http://diveintohtml5.info/everything.html
 
## querySelectorAll
![alt tag](https://i.gyazo.com/fe09cc26f68fd4eed0d7ecc7cb424001.png)

Voor de querySelectorAll gebruik ik een getElementsByClassName, omdat ik elke class nodig heb. Zo werkt de applicatie ook in IE4/5/6

## classList
![alt tag](https://i.gyazo.com/a2f1dfc6e67de83b9ff1404e87aa48ed.png)

Voor classList heb ik geen fallback, de 9.90% van de gebruikers hiervoor hebben deze ook niet nodig, omdat het over een simpel hover effect gaat.
