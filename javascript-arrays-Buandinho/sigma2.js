//oppgave

let Primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];
function SkrivUtprimtall() {
    document.write(Primtall)
}
SkrivUtprimtall();


//1c
function allePrimtall() {
    return [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    ];
}
document.write("<br>" + allePrimtall());

//oppgave 2

let tilfeldigTall = [];
let tall = Math.random() * 100;
tall = Math.floor(tall) + 1;
document.write("<br>" + tall);

let heltall = [1];

function fyllMedTilfeldigeHeltall() {
    for (let i = 0; i < 9; i++) {
        arr.puch(Math.floor(Math.random() * 100) + 1);
    }
}

let.heltall = [];
fyllMedTilfeldigeHeltall();
document.write("<br>" + heltall);

function fyllArray(liste, nummer) {
    for (let i = 0; i < nummer; i++) {
        liste.push(Math.floor(Math.random() * 100) + 1);
    }
}

//oppgave 3
