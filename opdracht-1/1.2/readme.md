# Funda Roaming - Accesibillity issues

## Afbeeldingen
Ik gebruik slechts 1 afbeelding, die wordt gewisseld als er een nieuwe woning in de buurt wordt gevonden. 
Het enige wat ik hierin zou veranderen zou een beter alt attribute zijn. Zodat er meer duidelijkheid is over welke woning er zou staan.

## Custom fonts
Ik gebruik slechts een decoratief font, Montserrat, en heb als fallback sans-serif aanstaan om dit op te vangen

## Javascript volledig
Mijn pagina blijft altijd op de loading functie staan, ik moet een NoScript toevoegen die uitlegt dat de pagina niet volledig werkzaam is zonder javascript.

## Kleur
Er zijn 2 combinaties op mijn website die onvoldoende scoren als het om kleur gaat (aldus Lea Verou's contrast checker).
 - http://leaverou.github.io/contrast-ratio/#%23FFF-on-%236EC8E50
 - http://leaverou.github.io/contrast-ratio/#%23FFF-on-rgb%28240%2C%20170%2C%200%29
 
Voor deze kleurcombinaties zou een hoger contrast nodig zijn, in plaats van een #FFFFFF (wit) zou een #000000 beter zijn.

## Breedband internet
Ik heb een gigantisch probleem wat betreft internet, het laden van de website scoort niet slecht, maar het binnenhalen van de coördinaten is een drama.
Het huidige systeem slaat alle locaties op in localStorage, om deze niet vervolgens dubbel in te laden.

Ik zou voor de toekomst (iets wat ik ook had aangeraden bij Funda) deze applicatie tijdens WiFi toegang alle data binnen laten halen, en dan deze vervolgens 
lokaal op te slaan, zodat er alleen intern queries nodig zijn om de data op te vragen. Dit zou de loading speed aanzienlijk moeten verminderen.

## Cookies
Ik gebruik verder geen cookies, dus deze hebben geen invloed op de website.

## WiFi hotspots/HTTPS
Lastig, ik kan CORS errors krijgen op het moment dat ik alle data via een HTTPS binnehaal, ipv een HTTP, ik moet ervoor zorgen dat de origin in beide gevallen gelijk is.

## Content blockers
Alle adblockers die ik geprobeerd heb (Adblock, Adblock Plus en Ghostery) laten alles toe, dit is dus geen probleem

## localStorage
Voor browsers die geen localStorage ondersteunen moet alle data per sessie opnieuw worden opgehaald, dit kost extra data.
Een alternatief zou zijn om dit op te slaan in een MongoDB zodat dit alsnog lokaal kan worden opgehaald

## CDN
Als een CDN geblokkeerd wordt zou ik zelf alle dependencies hosten, volledig minified, verder zou ik voornamelijk proberen om Vanilla JS te werken.

## Ad Blockers
Nogmaals, hier heb ik geen problemen bij ondervonden.

## Muis / Trackpad
Mijn applicatie werkt volledig zonder muis/trackpad. Met behulp van swiping / keystrokes ( de < en > schakelen tussen het menu) kan tussen de pagina's worden geswitch, en daarnaast is er geen muis nodig om te zoeken naar woningen in mijn applicatie.