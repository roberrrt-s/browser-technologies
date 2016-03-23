# grocery-fallback
Fallbacks:

## Drag and Drop

Voor browsers die dit niet ondersteunen heb ik een combinatie van een bestaand Modernizr script en een stackoverflow artikel samengevoegd
Mocht er geen drag & drop aanwezig zijn, dan is er fallback met behulp van een click en click systeem.

 - http://stackoverflow.com/questions/2856262/detecting-html5-drag-and-drop-support-in-javascript
 - http://diveintohtml5.info/everything.html
 
## querySelectorAll

Voor de querySelectorAll gebruik ik een getElementsByClassName, omdat ik elke class nodig heb.

## classList

Voor classList heb ik geen fallback, de 9.90% van de gebruikers hiervoor hebben deze ook niet nodig, omdat het over een simpel hover effect gaat.
