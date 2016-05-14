# Grocery Fallback

## Live URL:
http://robertspier.nl/hva/bt/

## Fallbacks:

### Basic state
Als de gebruiker geen Javascript oid ondersteunt vervalt de applicatie tot een checkbox systeem waardoor er serverside boodschappen kunnen worden toegevoegd aan het lijstje

### Half state
Als de gebruiker een niet-moderne browser gebruikt, of een browser die niet de drag and drop functionaliteit ondersteund kan met behulp van clicks alsnog het boodschappenlijstje worden opgebouwd.

### Full state
Als de gebruiker op de laatste versie van Chrome zit kan hij / zij naast klikken ook een drag en drop gebruiken.

# 12 features

## Afbeeldingen
Ik gebruik geen afbeeldingen zodat de applicatie bruikbaar is voor hen zonder.

## Custom fonts
Ik gebruik geen custom fonts, omdat het geen toegevoegde waarde heeft

## Javascript volledig
Met behulp van input checkboxes en een submit button wil ik serverside alle 'checked' velden in het boodschappenlijstje zetten.

## Kleur
Lea Verou's kleurenchecker voorziet geen enkel probleem met het contrast
 
## Breedband internet
Ik heb geen externe grote files gebruikt, alles is zo klein mogelijk (minified)

## Cookies
Ik gebruik verder geen cookies, dus deze hebben geen invloed op de website.

## WiFi hotspots/HTTPS
Alles wordt op mijn hosting gehost, er is geen CORS problematiek

## Content blockers
Alle adblockers die ik geprobeerd heb (Adblock, Adblock Plus en Ghostery) laten alles toe, dit is dus geen probleem

## localStorage
Ik gebruik geen localStorage

## CDN
Ik gebruik geen CDN's, ik host alles zelf

## Ad Blockers
Nogmaals, hier heb ik geen problemen bij ondervonden.

## Muis / Trackpad
Alle opties hebben een tabindex, en de lege velden een aria-label empty