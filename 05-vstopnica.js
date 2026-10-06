// =====================================================
// JS 1 · 05 Cena vstopnice
// Zagon:  node 05-vstopnica.js
//
// PRAVILA
//   - Osnovna cena je 20 €.
//   - Otroci do vključno 12 let plačajo 10 €.
//   - Študenti plačajo 14 €.
//   - Upokojenci (65 let ali več) plačajo 12 €.
//   - Ob sobotah in nedeljah se VSAKI ceni prišteje 2 €.
//   - Če ni prostih mest, se izpiše "Razprodano".
//
// Koda ima 3 napake. Kje so, ne piše: primerjaj pravila s kodo.
//
// KAKO PREVERIŠ
//   Za vsak scenarij iz tabele nastavi vhodne podatke,
//   shrani, poženi in primerjaj izpis s pričakovanim.
//   Končal si, ko VSI scenariji izpišejo pričakovano.
//
//   Scenarij | starost | student | dan       | prostaMesta | Pričakovano
//   ---------|---------|---------|-----------|-------------|-------------
//   A        | 30      | false   | "sreda"   | 10          | Cena: 20 €
//   B        | 12      | false   | "sreda"   | 10          | Cena: 10 €
//   C        | 30      | false   | "sobota"  | 10          | Cena: 22 €
//   D        | 8       | false   | "nedelja" | 10          | Cena: 12 €
//   E        | 22      | true    | "sreda"   | 10          | Cena: 14 €
//   F        | 70      | false   | "sobota"  | 10          | Cena: 14 €
//   G        | 30      | false   | "sreda"   | 0           | Razprodano
// =====================================================


// ===== VHODNI PODATKI (spreminjaj samo te) =====
let starost = 30;
let student = false;
let dan = "sreda";
let prostaMesta = 10;


// ===== IZRAČUN =====
let cena = 20;

if (dan === "sobota" && dan === "nedelja") {
  cena = cena + 2;
}

if (starost < 12) {
  cena = 10;
} else if (student) {
  cena = 14;
} else if (starost >= 65) {
  cena = 12;
}

if (prostaMesta === 0) {
  console.log("Razprodano");
} else {
  console.log(`Cena: ${cena} €`);
}
