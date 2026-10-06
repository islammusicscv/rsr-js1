// =====================================================
// JS 1 · 03 Pogoji
// Zagon:  node 03-pogoji.js
//
// Vsak primer izpiše napačen rezultat. Popravi pogoje tako,
// da izpis ustreza vrstici "Želen izpis". Vhodnih podatkov
// ne spreminjaj.
// =====================================================


// ---------- 1 ----------
// 90 ali več točk je odlično, 50 ali več zadostno, sicer nezadostno.
// Želen izpis: 1: odlično
let rezultat = 95;
if (rezultat >= 50) {
  console.log("1: zadostno");
} else if (rezultat >= 90) {
  console.log("1: odlično");
} else {
  console.log("1: nezadostno");
}


// ---------- 2 ----------
// Vstop je dovoljen, če ima obiskovalec vstopnico IN je star vsaj 18 let.
// Želen izpis: 2: Vstop zavrnjen
let imaVstopnico = false;
let starost = 20;
if (imaVstopnico || starost >= 18) {
  console.log("2: Vstop dovoljen");
} else {
  console.log("2: Vstop zavrnjen");
}


// ---------- 3 ----------
// Popust dobi študent ALI upokojenec.
// Želen izpis: 3: Popust
let student = true;
let upokojenec = false;
if (student && upokojenec) {
  console.log("3: Popust");
} else {
  console.log("3: Polna cena");
}


// ---------- 4 ----------
// Prijavljenega uporabnika pozdravimo z imenom.
// Želen izpis: 4: Pozdravljena nazaj, Ana
let prijavljen = true;
let uporabnik = "Ana";
if (!prijavljen) {
  console.log(`4: Pozdravljena nazaj, ${uporabnik}`);
} else {
  console.log("4: Prosim, prijavi se");
}


// ---------- 5 ----------
// Pod 18 °C je hladno, od 18 do vključno 25 °C prijetno, nad 25 °C prevroče.
// Želen izpis: 5: Prevroče
let temperatura = 30;
if (temperatura < 18) {
  console.log("5: Hladno");
} else if (temperatura >= 18 || temperatura <= 25) {
  console.log("5: Prijetno");
} else {
  console.log("5: Prevroče");
}
