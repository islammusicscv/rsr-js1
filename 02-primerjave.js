// =====================================================
// JS 1 · 02 Primerjave
// Zagon:  node 02-primerjave.js
//
// Vsak primer izpiše napačen rezultat. Popravi pogoj tako,
// da izpis ustreza vrstici "Želen izpis". Vhodnih podatkov
// (vrednosti spremenljivk) ne spreminjaj.
// =====================================================


// ---------- 1 ----------
// Za opravljen izpit je potrebnih vsaj 50 točk.
// Želen izpis: 1: Opravil
let tocke = 50;
if (tocke >= 50) {
  console.log("1: Opravil");
} else {
  console.log("1: Ni opravil");
}


// ---------- 2 ----------
// Želen izpis: 2: Ni pet
//              2: x je še vedno 3
let x = 3;
if (x == 5) {
  console.log("2: Je pet");
} else {
  console.log("2: Ni pet");
}
console.log(`2: x je še vedno ${x}`);


// ---------- 3 ----------
// Starost pride iz obrazca kot besedilo. Polnoleten je, kdor ima 18 let ali več.
// Želen izpis: 3: Polnoleten
let vnesenaStarost = "18";
if (vnesenaStarost >= 18) {
  console.log("3: Polnoleten");
} else {
  console.log("3: Mladoleten");
}


// ---------- 4 ----------
// Dostop imajo vsi razen gostov.
// Želen izpis: 4: Dostop zavrnjen
let vloga = "gost";
if (vloga !== "gost") {
  console.log("4: Dostop dovoljen");
} else {
  console.log("4: Dostop zavrnjen");
}


// ---------- 5 ----------
// Obe števili prideta iz obrazca kot besedilo.
// Želen izpis: 5: 10 je večje od 9
let prvo = 10;
let drugo = 9;
if (prvo < drugo) {
  console.log(`5: ${prvo} je manjše od ${drugo}`);
} else {
  console.log(`5: ${prvo} je večje od ${drugo}`);
}
