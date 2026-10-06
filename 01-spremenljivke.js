// =====================================================
// JS 1 · 01 Spremenljivke
// Zagon:  node 01-spremenljivke.js
//
// Vsak primer izpiše napačen rezultat. Popravi kodo tako,
// da izpis ustreza vrstici "Želen izpis". Izpisa ne prepisuj
// na roke: popravi izračun ali spremenljivko.
// Po vsakem popravku: Ctrl+S, nato znova poženi.
// =====================================================


// ---------- 1 ----------
// V košarico dodamo izdelek za 10 € in izdelek za 5 €.
// Želen izpis: 1: Skupaj 15 €
let skupaj = 0;
skupaj=skupaj+10;
skupaj=skupaj+5;
console.log(`1: Skupaj ${skupaj} €`);


// ---------- 2 ----------
// Želen izpis: 2: Pozdravljena, Ana Novak!
const ime = "Ana";
const priimek = "Novak";
console.log(`2: Pozdravljena, ${ime} ${priimek}!`);


// ---------- 3 ----------
// Želen izpis: 3: Cena je 12 €
const cena = 12;
console.log(`3: Cena je ${cena} €`);


// ---------- 4 ----------
// Količina pride iz obrazca kot besedilo.
// Želen izpis: 4: Skupaj 15 kosov
const naZalogi = 10;
const dodano = 5;
console.log(`4: Skupaj ${naZalogi + dodano} kosov`);


// ---------- 5 ----------
// Vstopnica stane 20 €, popust je 5 €.
// Želen izpis: 5: Za plačilo 15 €
let osnovna = 20;
let popust = 0;
popust = 5;
let zaPlacilo = osnovna - popust;
console.log(`5: Za plačilo ${zaPlacilo} €`);
