// =====================================================
// JS 1 · 04 Objekti
// Zagon:  node 04-objekti.js
//
// Vsak primer izpiše napačen rezultat. Popravi kodo tako,
// da izpis ustreza vrstici "Želen izpis".
// =====================================================


// ---------- 1 ----------
// Želen izpis: 1: Na voljo je 40 mest
const predstava = {
  naslov: "Hamlet",
  cena: 18,
  prostaMesta: 40,
};
if (predstava.prosta > 0) {
  console.log(`1: Na voljo je ${predstava.prosta} mest`);
} else {
  console.log("1: Ni prostih mest");
}


// ---------- 2 ----------
// Želen izpis: 2: Koncert v parku, Ljubljana
const koncert = {
  naslov: "Koncert v parku",
  prizorisce: {
    ime: "Tivoli",
    mesto: "Ljubljana",
  },
};
console.log(`2: ${koncert.naslov}, ${koncert.mesto}`);


// ---------- 3 ----------
// Cene hranimo v centih (2500 = 25 €), izpisujemo v evrih.
// Želen izpis: 3: Vstopnica stane 25 €
const vstopnica = {
  naslov: "Jazz večer",
  cenaCenti: 2500,
};
console.log(`3: Vstopnica stane ${vstopnica.cenaCenti} €`);


// ---------- 4 ----------
// Dogodek še ni razprodan.
// Želen izpis: 4: Na voljo
const festival = {
  naslov: "Poletni festival",
  razprodano: "false",
};
if (festival.razprodano) {
  console.log("4: Razprodano");
} else {
  console.log("4: Na voljo");
}


// ---------- 5 ----------
// Akcijska ponudba naj ima ceno 15 €, originalni dogodek pa ostane pri 20 €.
// Želen izpis: 5: Original 20 €, akcija 15 €
const original = {
  naslov: "Stand-up večer",
  cena: 20,
};
const akcija = original;
akcija.cena = 15;
console.log(`5: Original ${original.cena} €, akcija ${akcija.cena} €`);
