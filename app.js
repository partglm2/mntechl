// @ts-nocheck
/* eslint-disable */

const rx = require('./class/regex');
const fr = require('./class/traduction');

//to start your program you have to use : node start.js app.js


/* the regex
rx.rl (rl for return line) mean a return line("\n")
rx.idk (idk for i don't know) mean a all the charactere(numbers and letters)
rx.ou mean this | (it's the word OR but for the pattern)
rx.di (di for digit) mean all the number so it can be 0 3 4 or whatever
rx.sp (sp for spaces) mean a whites spaces
rx.be (for between) example: rx.be(2,4) is for see if a pattern is here 2 3 or 4 time (3 bcz it's all number between 2 and 4)
rx.mi (for minimum) is for see if a pattern is here n time (n is the number to specify)
rx.le (le for letter) mean all the letter so it can be E f Z i p a or whatever
rx.hm (hm for how much) is for having the same pattern but multiple time the arguments is the how much time you want the pattern
rx.rt (rt for part) is for a member of the pattern 
rx.to is for a letter or number to another letter or number example rx.to(0,6) return true for all number between 0 and 6 so the number 7 return false
rx.testregex is for testing your pattern

for example you can use this:
    const reg = rx.pt("#" + rx.rt(rx.to('A','F') + rx.to('a','f') + rx.to(0,9)) + rx.hm(6) + rx.ou() + rx.rt(rx.to('A','F') + rx.to('a','f') + rx.to(0,9)) + rx.hm(3))
    let match = rx.testregex(reg, "#FFFFFF")
    console.log(match);
for test if a string is a hexadecimal color or not (it return true or false)  
*/


/* 
yes i know i have translate it in french and i do my explain in english (logic has left the chat)

all the words are translate in french,
if you don't know what's the word you want here is the full list of words:
    fr.test
    fr.si
    fr.definir
    fr.fonction
    fr.classe
    fr.sinon
    fr.essayer
    fr.capturer
    fr.pour
    fr.boucle
    fr.arret
    fr.continuer
    fr.ceci
    fr.parent
    fr.nouveau
    fr.supprimer
    fr.dans
    fr.retourner
    fr.asynchroniser
    fr.attendre
    fr.promesse
    fr.importer
    fr.exporter
    fr.etendre
    fr.statique
    fr.vrai
    fr.faux
    fr.nul
    fr.indefinie
    fr.infinie
    fr.arguments
    fr.lancer
    fr.construire
    fr.depuis
    fr.comme
    fr.vide
    fr.avec
    fr.typeDe
    fr.faire
    fr.de
    fr.choisir
    fr.case
    fr.default
    fr.pourchaque
    fr.erreur
    fr.inclus
    fr.joindre
    fr.taille
    fr.cles
    fr.pousser
    fr.valeur
        NaN , debugger et pop sont des mots qui ne change pas
*/

/////////////////////Delete the // if you want to test the class
console.log(rx.test("test"));
console.log(fr.test("test"));

//use node start.js app.js to test you program 
//you can edit below this line !!!!!!!!!!