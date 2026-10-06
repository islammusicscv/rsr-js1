// =====================================================
// JS 1 · 06 Kdo sme urejati dogodek
// Zagon:  node 06-dostop.js
//
// PRAVILA
//   - Neprijavljen uporabnik dobi "Prijavi se".
//   - Dogodka, ki je že minil, ne sme urejati nihče, tudi admin ne:
//     "Dogodek je že minil".
//   - Admin sme urejati vsak dogodek.
//   - Organizator sme urejati samo svoje dogodke
//     (njegov uporabnikId je enak organizatorId dogodka).
//   - Vsi ostali dobijo "Nimaš pravic".
//
// organizatorId pride iz naslova strani (URL), zato je besedilo.
// Vhodnih podatkov ne pretvarjaj, popravi izračun.
//
// Koda ima 3 napake. Kje so, ne piše: primerjaj pravila s kodo.
// Pozor: ena napaka se lahko skriva za drugo.
//
// KAKO PREVERIŠ
//   Scenarij | prijavljen | vloga         | uporabnikId | organizatorId | minil | Pričakovano
//   ---------|------------|---------------|-------------|---------------|-------|---------------------
//   A        | false      | "obiskovalec" | 3           | "7"           | false | Prijavi se
//   B        | true       | "admin"       | 1           | "7"           | false | Lahko urejaš
//   C        | true       | "admin"       | 1           | "7"           | true  | Dogodek je že minil
//   D        | true       | "organizator" | 7           | "7"           | false | Lahko urejaš
//   E        | true       | "organizator" | 7           | "9"           | false | Nimaš pravic
//   F        | true       | "obiskovalec" | 3           | "7"           | false | Nimaš pravic
//   G        | true       | "organizator" | 7           | "7"           | true  | Dogodek je že minil
// =====================================================


// ===== VHODNI PODATKI (spreminjaj samo te) =====
let prijavljen = true;
let vloga = "admin";
let uporabnikId = 1;
let organizatorId = "7";
let minil = false;


// ===== IZRAČUN =====
if (!prijavljen) {
  console.log("Prijavi se");
} else if (vloga === "admin") {
  console.log("Lahko urejaš");
} else if (minil) {
  console.log("Dogodek je že minil");
} else if (vloga === "organizator" || uporabnikId === organizatorId) {
  console.log("Lahko urejaš");
} else {
  console.log("Nimaš pravic");
}
