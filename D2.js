/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 8
let num2 = 16
if (num2 > num1) {
  console.log("maggiore")
} else {
  num1 > num2
  console.log("minore")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex2 = [1, 2, 3, 4]
if (ex2 != 5) {
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex3 = 25
if (ex3 % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero8 = 8
let somma = 16
if (numero8 === 8 || somma === 8) {
  console.log("uno dei 2 numeri è 8")
} else if (somma + numero8 === 8) {
  console.log("la somma è uguale a 8")
} else if (somma - numero8 === 8) {
  console.log("la sottrazione è uguale a 8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cart = 40
let ship = 10
const totalShoppingCart = cart >= 50 ? cart : cart + ship
console.log(totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = (totalShoppingCart * 20) / 100
console.log(blackFriday)
if (totalShoppingCart + blackFriday) {
  console.log
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex7 = [3, 6, 9]
ex7.reverse()
console.log(ex7)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ex8 = 12
console.log(typeof ex8)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7
if (val < 10) {
  console.log("Meno di 10")
} else if (val < 5) {
  console.log("Meno di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
let m10 = val < 10
let m5 = val < 5
if (m5 === true) {
  console.log("Minore  di 5")
} else if (m10 === true && val > 5) {
  console.log("Meno di 10")
} else {
  console.log("maggiore o uguale a 10 ")
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const ex11 = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

/* SCRIVI QUI LA TUA RISPOSTA */
ex11.city = "Toronto"
console.log(ex11)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete ex11.lastName
console.log(ex11)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
ex11.skills.pop()
console.log(ex11)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex14 = []
ex14.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(ex14)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex15 = [1, 5, 10]
ex15.splice(2, 2, 100)
console.log(ex15)
