import React from 'react';

const urlHaeKaikki = 'http://localhost:1595/api/juomat/'
const urlPoistaKaikki = 'http://localhost:8080/reset'

export function Haesanonta(callback) {
    let talteen = fetch(urlHaeKaikki)
        .then(result => {
            console.log(result)
            return result.json()
            }).then(myjson => {
                console.log(myjson);
                callback(myjson);
            });

} 

export function Luosanonta(sanonta) {
    fetch(urlHaeKaikki, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({'author' : sanonta.etunimi, 'quotetext' : sanonta.sukunimi})
    })
    .then(res => console.log(res))
}

export function Poistasanonta(id) {
    fetch(urlHaeKaikki, {
        method: 'DELETE'
    })
    .then(res => res.json())
}

export function PoistaJuomaApista(juoma_id) {
    fetch(urlHaeKaikki + juoma_id, {
        method: 'DELETE'
    })
    .then(res => res.json())
}


export function MuokkaaJuoma(juoma) {
    fetch(urlHaeKaikki + juoma.juoma_id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({juoma_id: juoma.juoma_id, kategoria: juoma.kategoria, nimi: juoma.nimi,
        valmistaja: juoma.valmistaja, hinta: juoma.hinta, valmistusmaa: juoma.valmistusmaa,
        valmistusvuosi: juoma.valmistusvuosi, kuvaus: juoma.kuvaus})
    })
    .then(res => console.log(res))
}
    
