
window.addEventListener('load', init)
function init() {
    const list = [{ szemszin: "barna", kor: 20, tesok: 2, nev: "Peti", mondat: "A kedd!" },
        { szemszin: "barna", kor: 23, tesok: 2, nev: "Gergo", mondat: "A kedd masodszor!" },
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
        { szemszin: "kék", kor: 20, tesok: 2, nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
        { szemszin: "barna", kor: 20, tesok: 3, nev: "GergőT", mondat: "Kedd a legjóbb nap." },
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.", },
        { szemszin: "zöld", kor: 20, tesok: 2, nev: "Márton", mondat: "Nem volt angol hétfőn" },
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.", },
        { szemszin: "barna", kor: 21, tesok: 2, nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
        { szemszin: "kék", kor: 20, tesok: 4, nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." },];

    megjelenitTabla(list)
    atlagElet(list)
    gomb(button)
}


function megjelenit(list) {
    for (let i = 0; i < list.length; i++) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const h = document.createElement("h3");
        document.body.appendChild(div);
        div.appendChild(h);
        div.appendChild(p);
        const text = document.createTextNode(list[i].nev);
        p.appendChild(document.createTextNode(list[i].mondat));
        h.appendChild(text);

    }
}
function megjelenit() {
    const MAIN = document.querySelector("main");
    let htmlkod = "";
    for (let i = 0; i < list.length; i++) {
        htmlkod += `<div> <h2>${list[i].nev}</h2> <p>${list[i].mondat}</p> <div>`;
    }
    MAIN.innerHTML += htmlkod;
}

function megjelenitTabla(list) {
    const article = document.querySelector("article");
    let htmlkod = `<table>
    <thead>
        <tr>
            <td>nev</td>
            <td>mondat</td>
            <td>szemszin</td>
            <td>kor</td>
        </tr>
    </thead>
    <tbody>`;
    for (let index = 0; index < list.length; index++) {
        htmlkod += `<tr>
            <td>${list[index].nev}</td>
            <td>${list[index].mondat}</td>
            <td>${list[index].szemszin}</td>
            <td>${list[index].kor}</td>
            </tr>`;
    }
    htmlkod += ` </tbody >
    </table >`;
    article.innerHTML += htmlkod;
}
function atlagElet(list) {
    let atlag=0;
    let db=0;
    for (let index = 0; index < list.length; index++) {
         atlag +=list[index].kor;
        db +=1;
    }
    let ossz=atlag/db
    console.log(ossz);
}

function gomb(button){
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}
